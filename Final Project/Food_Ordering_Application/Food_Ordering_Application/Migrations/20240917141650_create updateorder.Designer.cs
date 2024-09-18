﻿// <auto-generated />
using System;
using Food_Ordering_Application.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Food_Ordering_Application.Migrations
{
    [DbContext(typeof(FoodOrderingDbContext))]
    [Migration("20240917141650_create updateorder")]
    partial class createupdateorder
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Food_Ordering_Application.Model.Delivery", b =>
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

                    b.HasIndex("OrderId")
                        .IsUnique();

                    b.ToTable("Deliveries");
                });

            modelBuilder.Entity("Food_Ordering_Application.Model.MenuItem", b =>
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

            modelBuilder.Entity("Food_Ordering_Application.Model.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OrderId"));

                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<DateTime>("OrderDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("PaymentStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RestaurantId")
                        .HasColumnType("int");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("TotalAmount")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("OrderId");

                    b.HasIndex("CustomerId");

                    b.HasIndex("RestaurantId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Food_Ordering_Application.Model.Restaurant", b =>
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

            modelBuilder.Entity("Food_Ordering_Application.Model.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FullName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Food_Ordering_Application.Model.Delivery", b =>
                {
                    b.HasOne("Food_Ordering_Application.Model.User", "DeliveryStaff")
                        .WithMany("Deliveries")
                        .HasForeignKey("DeliveryStaffId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Food_Ordering_Application.Model.Order", "Order")
                        .WithOne("Delivery")
                        .HasForeignKey("Food_Ordering_Application.Model.Delivery", "OrderId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("DeliveryStaff");

                    b.Navigation("Order");
                });

            modelBuilder.Entity("Food_Ordering_Application.Model.MenuItem", b =>
                {
                    b.HasOne("Food_Ordering_Application.Model.Restaurant", "Restaurant")
                        .WithMany("MenuItems")
                        .HasForeignKey("RestaurantId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Restaurant");
                });

            modelBuilder.Entity("Food_Ordering_Application.Model.Order", b =>
                {
                    b.HasOne("Food_Ordering_Application.Model.User", "Customer")
                        .WithMany("Orders")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Food_Ordering_Application.Model.Restaurant", "Restaurant")
                        .WithMany("Orders")
                        .HasForeignKey("RestaurantId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Customer");

                    b.Navigation("Restaurant");
                });

            modelBuilder.Entity("Food_Ordering_Application.Model.Restaurant", b =>
                {
                    b.HasOne("Food_Ordering_Application.Model.User", "Owner")
                        .WithMany("OwnedRestaurants")
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Owner");
                });

            modelBuilder.Entity("Food_Ordering_Application.Model.Order", b =>
                {
                    b.Navigation("Delivery");
                });

            modelBuilder.Entity("Food_Ordering_Application.Model.Restaurant", b =>
                {
                    b.Navigation("MenuItems");

                    b.Navigation("Orders");
                });

            modelBuilder.Entity("Food_Ordering_Application.Model.User", b =>
                {
                    b.Navigation("Deliveries");

                    b.Navigation("Orders");

                    b.Navigation("OwnedRestaurants");
                });
#pragma warning restore 612, 618
        }
    }
}
