using System.ComponentModel.DataAnnotations;

namespace Food_Order_Application_Final_Project.Model
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
       
        public string? CustomerName { get; set; }

        public string? CustomerEmail { get; set; }

        public string? CustomerPhone { get; set; }

        public string? CustomerPlatNo { get; set; }

        public string? CustomerStreet { get; set; }  
        public string? CustomerCity { get; set; }
        public string? CustomerState     { get; set; }

        public float TotalPrice { get; set; }

        public ICollection<Delivery>? Deliveries { get; set; }

    }
}
