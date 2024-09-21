﻿// <auto-generated />
using System;
using Food_Order_Application_Final_Project.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Food_Order_Application_Final_Project.Migrations
{
    [DbContext(typeof(FoodOrderDbContext))]
    partial class FoodOrderDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.Delivery", b =>
                {
                    b.Property<int>("DeliveryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DeliveryId"));

                    b.Property<int>("DeliveryStaffId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("DeliveryTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("OrderId")
                        .HasColumnType("int");

                    b.Property<DateTime>("PickupTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("DeliveryId");

                    b.HasIndex("DeliveryStaffId");

                    b.HasIndex("OrderId");

                    b.ToTable("Deliveries");
                });

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.MenuItem", b =>
                {
                    b.Property<int>("MenuItemId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MenuItemId"));

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsAvailable")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("RestaurantId")
                        .HasColumnType("int");

                    b.HasKey("MenuItemId");

                    b.HasIndex("RestaurantId");

                    b.ToTable("MenuItems");
                });

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OrderId"));

                    b.Property<string>("CustomerCity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustomerEmail")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CustomerName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustomerPhone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustomerPlatNo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustomerState")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustomerStreet")
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("TotalPrice")
                        .HasColumnType("real");

                    b.HasKey("OrderId");

                    b.HasIndex("CustomerEmail");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.Restaurant", b =>
                {
                    b.Property<int>("RestaurantId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RestaurantId"));

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CuisineType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OwnerId")
                        .HasColumnType("int");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Rating")
                        .HasColumnType("float");

                    b.HasKey("RestaurantId");

                    b.HasIndex("OwnerId");

                    b.ToTable("Restaurants");
                });

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("FullName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            Email = "john@gmail.com",
                            FullName = "John",
                            PasswordHash = "John1!",
                            Role = "Customer"
                        },
                        new
                        {
                            UserId = 2,
                            Email = "alice@gmail.com",
                            FullName = "Alice",
                            PasswordHash = "Ali32$",
                            Role = "RestaurantOwner"
                        },
                        new
                        {
                            UserId = 3,
                            Email = "bob@gmail.com",
                            FullName = "Bob",
                            PasswordHash = "Bob%!",
                            Role = "DeliveryStaff"
                        },
                        new
                        {
                            UserId = 4,
                            Email = "swathi@gmail.com",
                            FullName = "Swathi",
                            PasswordHash = "Swa123@",
                            Role = "Admin"
                        });
                });

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.Delivery", b =>
                {
                    b.HasOne("Food_Order_Application_Final_Project.Model.User", "DeliveryStaff")
                        .WithMany("Deliveries")
                        .HasForeignKey("DeliveryStaffId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Food_Order_Application_Final_Project.Model.Order", "Order")
                        .WithMany("Deliveries")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("DeliveryStaff");

                    b.Navigation("Order");
                });

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.MenuItem", b =>
                {
                    b.HasOne("Food_Order_Application_Final_Project.Model.Restaurant", "Restaurant")
                        .WithMany("MenuItems")
                        .HasForeignKey("RestaurantId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Restaurant");
                });

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.Order", b =>
                {
                    b.HasOne("Food_Order_Application_Final_Project.Model.User", null)
                        .WithMany("Orders")
                        .HasForeignKey("CustomerEmail")
                        .HasPrincipalKey("Email");
                });

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.Restaurant", b =>
                {
                    b.HasOne("Food_Order_Application_Final_Project.Model.User", "Owner")
                        .WithMany("OwnedRestaurants")
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Owner");
                });

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.Order", b =>
                {
                    b.Navigation("Deliveries");
                });

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.Restaurant", b =>
                {
                    b.Navigation("MenuItems");
                });

            modelBuilder.Entity("Food_Order_Application_Final_Project.Model.User", b =>
                {
                    b.Navigation("Deliveries");

                    b.Navigation("Orders");

                    b.Navigation("OwnedRestaurants");
                });
#pragma warning restore 612, 618
        }
    }
}
