import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../User';

@Component({
  selector: 'app-registerdeliverystaff',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './registerdeliverystaff.component.html',
  styleUrl: './registerdeliverystaff.component.css'
})
export class RegisterdeliverystaffComponent {
  user :User ={
    userId: 0,
    fullName: '',
    email: '',
    passwordHash: '',
    role: 'DeliveryStaff',
    orders: [],
    ownedRestaurants: [],
    deliveries: []
  };
  constructor(private apiser:ApiService,private router:Router){
    
  }
  onSubmit():void{
    this.apiser.postcomp(this.user).subscribe(
      (response) =>
      {
        console.log('Delivery Staff added successfully',response);
        this.router.navigate(['/adminlogin']);
      }
    );
  }
  goBack(){
    this.router.navigate(['/adminlogin']);
   }
}
