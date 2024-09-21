import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../User';
import { ApiService } from '../api.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user :User ={
    userId: 0,
    fullName: '',
    email: '',
    passwordHash: '',
    role: '',
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
        console.log('User added successfully',response);
        this.router.navigate(['/']);
      }
    );
  }
  goBack(){
    this.router.navigate(['/']);
   }
}
