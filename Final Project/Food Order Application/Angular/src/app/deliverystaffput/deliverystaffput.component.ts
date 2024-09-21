import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../User';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-deliverystaffput',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './deliverystaffput.component.html',
  styleUrl: './deliverystaffput.component.css'
})
export class DeliverystaffputComponent {
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
isDeliveryStaff :boolean =false;
isAdmin :boolean =false;
constructor(
   private apiService: ApiService,
   private route: ActivatedRoute,
   private router: Router,
   private authser:AuthService
 ) { }
 
 
 ngOnInit(): void {
   this.loadUser();
   this.isDeliveryStaff = this.authser.isDeliveryStaff();
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
   this.apiService.updateDeliveryStaff(id,this.user).subscribe(
     (response) => {
       console.log('User updated successfully!', response);
       if(this.isAdmin){
           this.router.navigate(['/customerget'])
       }
       else if(this.isDeliveryStaff){
       this.router.navigate(['/deliverystaff',id]); 
       }
     },
     (error) => console.error('Error updating user', error)
   );
 }
 goBack(id:number){
   this.router.navigate(['/deliverystaff',id]);
 }
}
