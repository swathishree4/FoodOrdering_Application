import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-deliverystaff',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './deliverystaff.component.html',
  styleUrl: './deliverystaff.component.css'
})
export class DeliverystaffComponent {
  user: User | undefined;
  deliveries:any
  selectedCustomer:any

  constructor(
    private apiser: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.apiser.getbyid(id).subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
    this.apiser.getDeliveryByStaffID(id).subscribe(
      (response) => {
        this.deliveries = response;
      }
    );
  
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  exploreRestaurant(): void {
    this.router.navigate(['/restaurant']);
  }

  editAccount(): void {
    if (this.user) {
      this.router.navigate(['/deliverystaffput', this.user.userId]);
    }
  }

  deleteAccount(): void {
    if(this.user){
      this.router.navigate(['/deliverystaffdelete',this.user.userId]);
    }
  }

  order():void{
    this.router.navigate(['/orderget']);
  }
  showCustomerDetails(id:number){
    this.apiser.getOrderById(id).subscribe(
      (response) => {
        this.selectedCustomer = response;
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }
  takeOrder(id:number){
    this.apiser.updateDeliveryStatus(id).subscribe(
      (response) => {
        console.log('Status updated successfully!', response);
       
      },
      (error) => console.error('Error updating status', error)
    );
  }
}
