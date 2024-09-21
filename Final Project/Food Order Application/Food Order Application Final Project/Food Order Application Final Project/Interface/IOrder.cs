using Food_Order_Application_Final_Project.Model;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Food_Order_Application_Final_Project.Interface
{
    public interface IOrder
    {
        Task<IEnumerable<Order>> GetAllOrder();

        Task<Order> GetOrderById(int id);

        Task AddOrder(Order e);
        Task DeleteOrder(int id);

        Task UpdateOrder(int id, Order c);
    }
}
