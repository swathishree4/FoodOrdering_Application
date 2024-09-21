import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Order } from '../order';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  order :Order ={
    orderId: 0,
    totalPrice: 0,
    customerName: '',
   
    customerPhone: '',
    customerPlatNo: '',
    customerStreet: '',
    customerCity: '',
    customerState: '',
    deliveries: [],

   }
  constructor(private apiser:ApiService,private router:Router,private route:ActivatedRoute ){
    this.route.queryParams.subscribe(params=>{
      this.order.totalPrice=params['totalAmount'];
    });
   
  }
  onSubmit():void{
    this.apiser.postorder(this.order).subscribe(
      (response) =>
      {
        console.log('Order added successfully',response);
        alert('Your order has been placed!');
        this.router.navigate(['/adminlogin']);
       
      },
      (error) => {
        console.error('Error adding order', error);
        alert('There was an error submitting your order. Please try again.');
      }
    );
  }
  goBack(){
    this.router.navigate(['/']);
   }
  
}
