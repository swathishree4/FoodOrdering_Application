namespace Food_Order_Application_Final_Project.Model
{
    public class MenuItem
    {
        public int MenuItemId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public bool IsAvailable { get; set; } // For managing stock/out of stock items
        public int RestaurantId { get; set; } // Foreign key to Restaurant

        public string? Image { get; set; }

        public Restaurant? Restaurant { get; set; }
    }
}
