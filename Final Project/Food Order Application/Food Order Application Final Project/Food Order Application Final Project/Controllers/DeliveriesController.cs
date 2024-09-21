﻿using System;
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
    public class DeliveriesController : ControllerBase
    {
        private readonly FoodOrderDbContext _context;

        public DeliveriesController(FoodOrderDbContext context)
        {
            _context = context;
        }

        // GET: api/Deliveries
        [HttpGet]
        [Authorize(Roles = "Admin,DeliveryStaff")]
        public async Task<ActionResult<IEnumerable<Delivery>>> GetDeliveries()
        {
            return await _context.Deliveries.ToListAsync();
        }

        // GET: api/Deliveries/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Admin,DeliveryStaff")]
        public async Task<ActionResult<Delivery>> GetDelivery(int id)
        {
            var delivery = await _context.Deliveries.FindAsync(id);

            if (delivery == null)
            {
                return NotFound();
            }

            return delivery;
        }

        // PUT: api/Deliveries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin,DeliveryStaff")]
        public async Task<IActionResult> PutDelivery(int id, Delivery delivery)
        {
            if (id != delivery.DeliveryId)
            {
                return BadRequest();
            }

            _context.Entry(delivery).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeliveryExists(id))
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

        // POST: api/Deliveries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = "Admin,DeliveryStaff")]
        public async Task<ActionResult<Delivery>> PostDelivery(Delivery delivery)
        {
            _context.Deliveries.Add(delivery);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDelivery", new { id = delivery.DeliveryId }, delivery);
        }

        // DELETE: api/Deliveries/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin,DeliveryStaff")]
        public async Task<IActionResult> DeleteDelivery(int id)
        {
            var delivery = await _context.Deliveries.FindAsync(id);
            if (delivery == null)
            {
                return NotFound();
            }

            _context.Deliveries.Remove(delivery);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpGet("byDeliveryStaff/{deliveryStaffId}")]
        [Authorize(Roles = "Admin,DeliveryStaff")]
        public async Task<ActionResult<IEnumerable<Delivery>>> GetDeliveriesByDeliveryStaffId(int deliveryStaffId)
        {
            var deliveries = await _context.Deliveries
                                           .Where(d => d.DeliveryStaffId == deliveryStaffId)
                                           .ToListAsync();

            if (deliveries == null || deliveries.Count == 0)
            {
                return NotFound("No deliveries found for the given delivery staff.");
            }

            return Ok(deliveries);
        }

        // PUT: api/Deliveries/markAsSuccess/5
        [HttpPut("markAsSuccess/{id}")]
        [Authorize(Roles = "Admin,DeliveryStaff")]
        public async Task<IActionResult> MarkDeliveryAsSuccess(int id)
        {
            var delivery = await _context.Deliveries.FindAsync(id);
            if (delivery == null)
            {
                return NotFound("Delivery not found.");
            }

            delivery.Status = "Success"; // Update the status to "Success"

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeliveryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent(); // Return 204 No Content if the update was successful
        }
        [HttpGet("byOrderId/{orderId}")]
        [Authorize(Roles = "Admin,DeliveryStaff")]
        public async Task<ActionResult<IEnumerable<Delivery>>> GetDeliveriesByOrderId(int orderId)
        {
            var deliveries = await _context.Deliveries
                                           .Where(d => d.OrderId == orderId)
                                           .ToListAsync();

            if (deliveries == null || deliveries.Count == 0)
            {
                return NotFound("No deliveries found for the given order ID.");
            }

            return Ok(deliveries);
        }

        private bool DeliveryExists(int id)
        {
            return _context.Deliveries.Any(e => e.DeliveryId == id);
        }
    }
}
