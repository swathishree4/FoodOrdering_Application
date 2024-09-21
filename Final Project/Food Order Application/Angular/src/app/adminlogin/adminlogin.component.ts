import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(private router: Router) {}

  // Navigate to Customer Management Page
  navigateToCustomers(): void {
    this.router.navigate(['/customerget']);
  }

  // Navigate to Delivery Staff Management Page
  navigateToDeliveryStaff(): void {
    this.router.navigate(['/registerdeliverystaff']);
  }

 Orders():void{
  this.router.navigate(['/orderget']);
 }

  home():void{
    this.router.navigate(['/']);
  }

 
}
