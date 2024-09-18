namespace Food_Ordering_Application.Model
{
    public class Restaurant
    {
       
            public int RestaurantId { get; set; }
            public string? Name { get; set; }
            public string? Address { get; set; }
            public string? PhoneNumber { get; set; }
            public double Rating { get; set; }
            public string? CuisineType { get; set; }

            public string? Image {  get; set; }

           
            public bool IsActive { get; set; } // To track if the restaurant is open or closed
            public int OwnerId { get; set; } // Foreign key to User (RestaurantOwner)

            public User? Owner { get; set; }
            public ICollection<MenuItem>? MenuItems { get; set; }
            public ICollection<Order>? Orders { get; set; }
        }

    }

