import { Component } from '@angular/core';

import { ApiService } from '../api.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-customerput',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './customerput.component.html',
  styleUrl: './customerput.component.css'
})
export class CustomerputComponent {
 user:User={
     userId: 0,
     fullName: '',
     email: '',
     passwordHash: '',
     role: '',
     orders: [],
     ownedRestaurants: [],
     deliveries: []
 }
 isCustomer :boolean =false;
 isAdmin :boolean =false;
 
 constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private authser:AuthService
  ) { }
  
  
  ngOnInit(): void {
    this.loadUser();
    this.isCustomer = this.authser.isCustomer();
    this.isAdmin = this.authser.isAdmin();
   
  }
  loadUser():void{
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getbyid(id).subscribe(
      (u) => this.user = u,
      (error) => console.error('Error loading User', error)
    );
  }
  onUpdate(): void {
    const id = this.user.userId;
    this.apiService.updateCust(id,this.user).subscribe(
      (response) => {
        console.log('User updated successfully!', response);
        if(this.isAdmin){
            this.router.navigate(['/customerget'])
        }
        else if(this.isCustomer){
        this.router.navigate(['/customerbyid',id]); 
        }
       
      },
      (error) => console.error('Error updating user', error)
    );
  }
  goBack(id:number){
    this.router.navigate(['/customerbyid',id]);
  }
}
