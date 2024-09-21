import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { jwtDecode } from 'jwt-decode';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {
    userId: 0,
    fullName: '',
    email: '',
    passwordHash: '',
    role: '',
    orders: [],
    ownedRestaurants: [],
    deliveries: []
  };

  constructor(private authService: AuthService, private router: Router,private apiser:ApiService) {}

  // Fetch userId based on the selected role from API
  onRoleChange() {
    if (this.user.email) {
      this.apiser.getUserIdByEmail(this.user.email).subscribe(
        (data: any) => {
          console.log('UserId fetched from API:', data);
          this.user.userId = data.userId; // Assuming the response contains a `userId` field
        }
      );
    }
  }

  onLogin() {
    console.log(this.user.email, this.user.passwordHash, this.user.role);
    if (this.user.email && this.user.passwordHash && this.user.role) {
      this.authService.login(this.user).subscribe(
        (data) => {
          const token = data?.token;
          console.log(token); // Log the token for debugging
          if (token) {
            localStorage.setItem('token', token); // Store the token directly
            console.log('Token stored');
            const decodedToken: any = jwtDecode(token);
            console.log('Decoded Token:', decodedToken);
  
            const id = Number(decodedToken.sub); // Extract userId
            if (id) {
              console.log('User ID:', id);
  
              // Navigate based on role and pass userId when necessary
              if (decodedToken.role === 'Admin') {
                this.router.navigate(['/adminlogin']);
              } else if (decodedToken.role === 'Customer') {
                this.router.navigate([`/customerbyid/${id}`]); // Pass userId in route
              } else if (decodedToken.role === 'DeliveryStaff') {
                this.router.navigate([`/deliverystaff/${id}`]);
              } else if (decodedToken.role === 'RestaurantOwner') {
                this.router.navigate([`/restaurantowner/${id}`]);
              }
            } else {
              console.error('User ID is missing from the token.');
              alert('Login failed: User ID is missing.');
            }
          } else {
            console.log('No token found in API response.');
            alert('Failed to retrieve token.');
          }
        },
        (error) => {
          console.error('Login error:', error);
          alert('Invalid login details or server error');
        }
      );
    } else {
      alert('Please enter email, password, and role');
    }
  }
}


