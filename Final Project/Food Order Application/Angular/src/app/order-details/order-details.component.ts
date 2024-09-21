import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Delivery } from '../Delivery';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  orderDetails:any
  deliveryStaff: any[] = []; 
  delivery:Delivery={
    deliveryId: 0,
    orderId: 0,
    deliveryStaffId: 0,
    status: ''
  }
  constructor(private apiser:ApiService,private route:ActivatedRoute,private router:Router){
    this.apiser.getDeliveryStaff().subscribe(
      (response) => {
        this.deliveryStaff = response;
      }
    );
  }
  ngOnInit():void{
   const id=+this.route.snapshot.params['id'];
   this.apiser.getOrderById(id).subscribe(
     (response)=>{
       this.orderDetails=response
       this.delivery.status='Pending';
     }
   )
  }
  assignOrder(id:number){
    this.delivery.orderId=id
    this.apiser.postDelivery(this.delivery).subscribe(
      (response) =>
      {
        console.log('Delivery added successfully',response);
        this.router.navigate(['/orderget']);
      }
    );
  }
}
