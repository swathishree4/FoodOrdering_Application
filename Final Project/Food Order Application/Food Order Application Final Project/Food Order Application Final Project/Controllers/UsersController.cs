using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Food_Order_Application_Final_Project.Model;
using Microsoft.AspNetCore.Authorization;

namespace Food_Order_Application_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly FoodOrderDbContext _context;

        public UsersController(FoodOrderDbContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
      
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
       
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
      
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.UserId)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
       
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.UserId }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
       
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        //getuseridbyemail
        [HttpGet("getUserIdByEmail/{email}")]
       
        public async Task<IActionResult> GetUserIdByEmail(string email)
        {
            if (string.IsNullOrEmpty(email))
            {
                return BadRequest("Email is required.");
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

            if (user == null)
            {
                return NotFound("User not found for the given email.");
            }


            return Ok(new { userId = user.UserId });
        }

        [HttpGet("deliveryStaff")]
        public async Task<ActionResult<IEnumerable<User>>> GetDeliveryStaff()
        {
            var deliveryStaff = await _context.Users
                                              .Where(u => u.Role == "DeliveryStaff")
                                              .ToListAsync();

            if (deliveryStaff == null || deliveryStaff.Count == 0)
            {
                return NotFound("No delivery staff found.");
            }

            return Ok(deliveryStaff);
        }
        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }
    }
}
