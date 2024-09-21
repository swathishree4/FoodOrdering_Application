namespace Food_Order_Application_Final_Project.Model
{
    public class User
    {

        public int UserId { get; set; }
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public string? PasswordHash { get; set; }
        public string? Role { get; set; } // Customer, RestaurantOwner, DeliveryStaff
        //public DateTime CreatedAt { get; set; }

        public ICollection<Order>? Orders { get; set; } // For Customers
        public ICollection<Restaurant>? OwnedRestaurants { get; set; } // For Restaurant Owners
        public ICollection<Delivery>? Deliveries { get; set; } // For Delivery Staffm
    }
}
