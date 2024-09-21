import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuItem } from '../menuitem';
import { ApiService } from '../api.service';
import { CartItem } from '../CartItem';
import { Order } from '../order';



@Component({
  selector: 'app-addtocart',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.css'
})



export class AddtocartComponent implements OnInit {
  cartItems: { item: MenuItem; quantity: number }[] = [];
  totalPrice: number = 0;
  menuItemId: number = 0;
  order: Order = {
    orderId: 0,
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerPlatNo: '',
    customerStreet: '',
    customerCity: '',
    customerState: '',
    totalPrice: 0,
    deliveries: []
  }; 

  constructor(
    private r: Router,
    private api: ApiService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cartItems = this.api.getCartItems().map(item => ({ item, quantity: 1 }));
    this.calculateTotalPrice();
    this.menuItemId = +this.router.snapshot.paramMap.get('id')!;
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((sum, cartItem) => sum + (cartItem.item.price * cartItem.quantity), 0);
  }

  updateTotalPrice(item: MenuItem, quantity: number): void {
    const cartItem = this.cartItems.find(ci => ci.item.menuItemId === item.menuItemId);
    if (cartItem) {
      cartItem.quantity = quantity;
      this.calculateTotalPrice();
    }
  }

  
  removeCartItem(index: number): void {
    this.cartItems.splice(index, 1);  // Remove the item at the specified index
    this.calculateTotalPrice();       // Recalculate total price after removing the item
  }

  placeOrder(): void {
    this.r.navigate(['/order'], {
      queryParams: {
        totalAmount: this.totalPrice
      }
    });
  }

  goBack(): void {
    this.r.navigate(['/menuItems', this.menuItemId]);
  }
}
