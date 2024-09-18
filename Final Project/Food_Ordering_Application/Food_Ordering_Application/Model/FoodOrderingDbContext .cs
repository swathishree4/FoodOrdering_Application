using Microsoft.EntityFrameworkCore;

namespace Food_Ordering_Application.Model
{
    public class FoodOrderingDbContext: DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Delivery> Deliveries { get; set; }

        public FoodOrderingDbContext(DbContextOptions<FoodOrderingDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // User-Order Relationship (Customer and Orders)
            modelBuilder.Entity<Order>()
                .HasOne(o => o.Customer)
                .WithMany(u => u.Orders)
                .HasForeignKey(o => o.CustomerId)
                .OnDelete(DeleteBehavior.Restrict);

            // User-Restaurant Relationship (Owner and Restaurants)
            modelBuilder.Entity<Restaurant>()
                .HasOne(r => r.Owner)
                .WithMany(u => u.OwnedRestaurants)
                .HasForeignKey(r => r.OwnerId)
                .OnDelete(DeleteBehavior.Restrict);

            // Restaurant-MenuItem Relationship
            modelBuilder.Entity<MenuItem>()
                .HasOne(m => m.Restaurant)
                .WithMany(r => r.MenuItems)
                .HasForeignKey(m => m.RestaurantId)
                .OnDelete(DeleteBehavior.Cascade);

            // Restaurant-Order Relationship
            modelBuilder.Entity<Order>()
                .HasOne(o => o.Restaurant)
                .WithMany(r => r.Orders)
                .HasForeignKey(o => o.RestaurantId)
                .OnDelete(DeleteBehavior.Restrict);

            // Order-Delivery Relationship
            modelBuilder.Entity<Delivery>()
                .HasOne(d => d.Order)
                .WithOne(o => o.Delivery)
                .HasForeignKey<Delivery>(d => d.OrderId)
                .OnDelete(DeleteBehavior.Restrict);

            // Delivery-DeliveryStaff Relationship
            modelBuilder.Entity<Delivery>()
                .HasOne(d => d.DeliveryStaff)
                .WithMany(u => u.Deliveries)
                .HasForeignKey(d => d.DeliveryStaffId)
                .OnDelete(DeleteBehavior.Restrict);

            base.OnModelCreating(modelBuilder);
        }

    }
}
