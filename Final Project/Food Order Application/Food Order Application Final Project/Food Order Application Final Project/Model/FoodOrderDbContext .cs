using Microsoft.EntityFrameworkCore;

namespace Food_Order_Application_Final_Project.Model
{
    public class FoodOrderDbContext:DbContext
    {

        // Define DbSets for each entity
        public DbSet<User> Users { get; set; }
        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<Delivery> Deliveries { get; set; }

        // Constructor to inject DbContextOptions
        public FoodOrderDbContext(DbContextOptions<FoodOrderDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // User and Orders (One-to-Many Relationship for Customers)
            modelBuilder.Entity<User>()
                .HasMany(u => u.Orders)
                .WithOne()
                .HasForeignKey(o => o.CustomerEmail)
                .HasPrincipalKey(u => u.Email); // Relating Order to User by CustomerEmail

            // User and Restaurants (One-to-Many Relationship for Restaurant Owners)
            modelBuilder.Entity<User>()
                .HasMany(u => u.OwnedRestaurants)
                .WithOne(r => r.Owner)
                .HasForeignKey(r => r.OwnerId);

            // User and Deliveries (One-to-Many Relationship for Delivery Staff)
            modelBuilder.Entity<User>()
                .HasMany(u => u.Deliveries)
                .WithOne(d => d.DeliveryStaff)
                .HasForeignKey(d => d.DeliveryStaffId);

            // Restaurant and MenuItems (One-to-Many Relationship)
            modelBuilder.Entity<Restaurant>()
                .HasMany(r => r.MenuItems)
                .WithOne(m => m.Restaurant)
                .HasForeignKey(m => m.RestaurantId);

            // Order and Deliveries (One-to-Many Relationship)
            modelBuilder.Entity<Order>()
                .HasMany(o => o.Deliveries)
                .WithOne(d => d.Order)
                .HasForeignKey(d => d.OrderId);

            // Seeding data (Optional)
            modelBuilder.Entity<User>().HasData(
                new User { UserId = 1, FullName = "John", Email = "john@gmail.com", PasswordHash = "John1!", Role = "Customer" },
                new User { UserId = 2, FullName = "Alice", Email = "alice@gmail.com", PasswordHash = "Ali32$", Role = "RestaurantOwner" },
                new User { UserId = 3, FullName = "Bob", Email = "bob@gmail.com", PasswordHash = "Bob%!", Role = "DeliveryStaff" },
                new User
                {
                    UserId = 4,
                    FullName = "Swathi",
                    Email = "swathi@gmail.com",
                    PasswordHash = "Swa123@",
                    Role = "Admin"}
            );
        }
    }
}
