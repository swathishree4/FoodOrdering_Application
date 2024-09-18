using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Food_Ordering_Application.Model;
using Microsoft.AspNetCore.Authorization;

namespace Food_Ordering_Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuItemsController : ControllerBase
    {
        private readonly FoodOrderingDbContext _context;

        public MenuItemsController(FoodOrderingDbContext context)
        {
            _context = context;
        }

        // GET: api/MenuItems
        [HttpGet]
        [Authorize(Roles = "RestaurantOwner,Admin")]
        public async Task<ActionResult<IEnumerable<MenuItem>>> GetMenuItems()
        {
            return await _context.MenuItems.ToListAsync();
        }

        // GET: api/MenuItems/5
        [HttpGet("{id}")]
        [Authorize(Roles = "RestaurantOwner,Admin")]
        public async Task<ActionResult<MenuItem>> GetMenuItem(int id)
        {
            var menuItem = await _context.MenuItems.FindAsync(id);

            if (menuItem == null)
            {
                return NotFound();
            }

            return menuItem;
        }

        // PUT: api/MenuItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = "RestaurantOwner,Admin")]
        public async Task<IActionResult> PutMenuItem(int id, MenuItem menuItem)
        {
            if (id != menuItem.MenuItemId)
            {
                return BadRequest();
            }

            _context.Entry(menuItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MenuItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = "RestaurantOwner,Admin")]
        public async Task<ActionResult<MenuItem>> PostMenuItem(MenuItem menuItem)
        {
            _context.MenuItems.Add(menuItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMenuItem", new { id = menuItem.MenuItemId }, menuItem);
        }

        // DELETE: api/MenuItems/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "RestaurantOwner,Admin")]
        public async Task<IActionResult> DeleteMenuItem(int id)
        {
            var menuItem = await _context.MenuItems.FindAsync(id);
            if (menuItem == null)
            {
                return NotFound();
            }

            _context.MenuItems.Remove(menuItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("{id}/menu-items")]
        public async Task<IActionResult> GetMenuItemsByRestaurant(int id)
        {
            // Retrieve the restaurant and its menu items
            var restaurant = await _context.Restaurants
                .Include(r => r.MenuItems)
                .FirstOrDefaultAsync(r => r.RestaurantId == id);

            if (restaurant == null)
            {
                return NotFound(new { message = "Restaurant not found" });
            }

            // Return the restaurant's menu items
            var menuItems = restaurant.MenuItems;
            return Ok(menuItems);
        }

        private bool MenuItemExists(int id)
        {
            return _context.MenuItems.Any(e => e.MenuItemId == id);
        }
    }
}
