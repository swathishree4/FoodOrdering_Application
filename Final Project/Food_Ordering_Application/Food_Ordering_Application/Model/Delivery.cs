namespace Food_Ordering_Application.Model
{
    public class Delivery
    {
        public int DeliveryId { get; set; }
        public int OrderId { get; set; } // Foreign key to Order
        public int DeliveryStaffId { get; set; } // Foreign key to User (DeliveryStaff)
        public DateTime PickupTime { get; set; }
        public DateTime? DeliveryTime { get; set; } // Nullable until delivered
        public string? Status { get; set; } // Assigned, PickedUp, Delivered

        public Order? Order { get; set; }
        public User? DeliveryStaff { get; set; }
    }
}
