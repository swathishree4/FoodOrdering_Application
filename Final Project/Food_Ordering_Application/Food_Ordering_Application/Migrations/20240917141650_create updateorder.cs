using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Food_Ordering_Application.Migrations
{
    /// <inheritdoc />
    public partial class createupdateorder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeliveryId",
                table: "Orders");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DeliveryId",
                table: "Orders",
                type: "int",
                nullable: true);
        }
    }
}
