using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Food_Ordering_Application.Migrations
{
    /// <inheritdoc />
    public partial class createupdatetable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Restaurants",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "MenuItems",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "Restaurants");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "MenuItems");
        }
    }
}
