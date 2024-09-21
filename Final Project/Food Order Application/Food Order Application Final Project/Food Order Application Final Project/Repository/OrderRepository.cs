using Food_Order_Application_Final_Project.Interface;
using Food_Order_Application_Final_Project.Model;
using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Food_Order_Application_Final_Project.Repository
{
    public class OrderRepository:IOrder
    {

        private readonly FoodOrderDbContext _context;

        public OrderRepository(FoodOrderDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Order>> GetAllOrder()
        {
            return await _context.Orders.ToListAsync();
        }

        public async Task<Order> GetOrderById(int id)
        {
            return await _context.Orders.FindAsync(id);
        }

        public async Task AddOrder(Order order)
        {
            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order != null)
            {
                _context.Orders.Remove(order);
                await _context.SaveChangesAsync();
            }
        }

        public async Task UpdateOrder(int id, Order order)
        {
            if (id != order.OrderId) // Assuming OrderId is the primary key
            {
                throw new ArgumentException("Order ID mismatch.");
            }

            _context.Entry(order).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
