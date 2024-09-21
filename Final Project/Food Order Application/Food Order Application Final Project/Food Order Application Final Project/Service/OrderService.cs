using Food_Order_Application_Final_Project.Interface;
using Food_Order_Application_Final_Project.Model;

namespace Food_Order_Application_Final_Project.Service
{
    public class OrderService
    {
        private readonly IOrder _orderRepository;

        public OrderService(IOrder orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public async Task<IEnumerable<Order>> GetAllOrders()
        {
            return await _orderRepository.GetAllOrder();
        }

        public async Task<Order> GetOrderById(int id)
        {
            return await _orderRepository.GetOrderById(id);
        }

        public async Task AddOrder(Order order)
        {
            await _orderRepository.AddOrder(order);
        }

        public async Task DeleteOrder(int id)
        {
            await _orderRepository.DeleteOrder(id);
        }

        public async Task UpdateOrder(int id, Order order)
        {
            await _orderRepository.UpdateOrder(id, order);
        }
    }
}
