import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../User';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-restaurantownerput',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './restaurantownerput.component.html',
  styleUrl: './restaurantownerput.component.css'
})
export class RestaurantownerputComponent {
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
isRestaurantOwner :boolean =false;
isAdmin :boolean =false;
constructor(
   private apiService: ApiService,
   private route: ActivatedRoute,
   private router: Router,
   private authser:AuthService
 ) { }
 
 
 ngOnInit(): void {
   this.loadUser();
   this.isRestaurantOwner = this.authser.isRestaurantOwner();
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
   this.apiService.updateRestaurantOwner(id,this.user).subscribe(
     (response) => {
       console.log('User updated successfully!', response);
       if(this.isAdmin){
           this.router.navigate(['/customerget'])
       }
       else if(this.isRestaurantOwner){
       this.router.navigate(['/restaurantowner',id]); 
       }
     },
     (error) => console.error('Error updating user', error)
   );
 }
 goBack(id:number){
   this.router.navigate(['/restaurantowner',id]);
 }
}
