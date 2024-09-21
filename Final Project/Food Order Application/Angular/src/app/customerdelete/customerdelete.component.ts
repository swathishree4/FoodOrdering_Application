import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-customerdelete',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './customerdelete.component.html',
  styleUrl: './customerdelete.component.css'
})
export class CustomerdeleteComponent {
  isCustomer :boolean =false;
  isAdmin :boolean =false;
  constructor(private apiser:ApiService,private router:Router,private route:ActivatedRoute,private ser:AuthService)
  {

  }
  
  ngOnInit():void{
    this.isCustomer = this.ser.isCustomer();
    this.isAdmin = this.ser.isAdmin();
    const id = +this.route.snapshot.params['id'];
    if (confirm("Are you sure to delete")){
       this.apiser.deletecust(id).subscribe(
      
        (response)=>
        {
          console.log("Customer Removed");
          this.router.navigate(['/'])
        }
       )
      }
      else{
        this.router.navigate(['/customerbyid',id])
      }
      
      if(this.isAdmin){
        this.router.navigate(['/customerget'])
    }
    else if(this.isCustomer){
    this.router.navigate(['/customerbyid',id]); 
    }
  }
}
