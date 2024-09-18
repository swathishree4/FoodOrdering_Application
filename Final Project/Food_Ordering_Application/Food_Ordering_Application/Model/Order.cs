namespace Food_Ordering_Application.Model
{
    public class Order
    {
        public int OrderId { get; set; }
        public int CustomerId { get; set; } // Foreign key to User (Customer)
        public int RestaurantId { get; set; } // Foreign key to Restaurant
        public DateTime OrderDate { get; set; }
        public string? Status { get; set; } // Pending, Confirmed, Cooking, OutForDelivery, Delivered
        public decimal TotalAmount { get; set; }
        public string? PaymentStatus { get; set; } // Paid, Unpaid
        //public int? DeliveryId { get; set; } // Foreign key to Delivery, nullable in case of pickup

        public User? Customer { get; set; }
        public Restaurant? Restaurant { get; set; }
        public Delivery? Delivery { get; set; }
    }
}
