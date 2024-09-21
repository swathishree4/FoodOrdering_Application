import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-deliverystaffdelete',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './deliverystaffdelete.component.html',
  styleUrl: './deliverystaffdelete.component.css'
})
export class DeliverystaffdeleteComponent {
  isDeliveryStaff :boolean =false;
  isAdmin :boolean =false;
  constructor(private apiser:ApiService,private router:Router,private route:ActivatedRoute,private ser:AuthService)
  {

  }
  
  ngOnInit():void{
    this.isDeliveryStaff = this.ser.isCustomer();
    this.isAdmin = this.ser.isAdmin();
    const id = +this.route.snapshot.params['id'];
    if (confirm("Are you sure to delete")){
       this.apiser.deleteDeliveryStaff(id).subscribe(
      
        (response)=>
        {
          console.log("Delivery Staff Removed");
          this.router.navigate(['/'])
        }
       )
      }
      else{
        this.router.navigate(['/deliverystaff',id])
      }
      
      if(this.isAdmin){
        this.router.navigate(['/customerget'])
    }
    else if(this.isDeliveryStaff){
    this.router.navigate(['/deliverystaff',id]); 
    }
  }
}
