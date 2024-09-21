import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-restaurantownerdelete',
  standalone: true,
  imports: [],
  templateUrl: './restaurantownerdelete.component.html',
  styleUrl: './restaurantownerdelete.component.css'
})
export class RestaurantownerdeleteComponent {
  isRestaurantOwner :boolean =false;
  isAdmin :boolean =false;
  constructor(private apiser:ApiService,private router:Router,private route:ActivatedRoute,private ser:AuthService)
  {

  }
  
  ngOnInit():void{
    this.isRestaurantOwner = this.ser.isRestaurantOwner();
    this.isAdmin = this.ser.isAdmin();
    const id = +this.route.snapshot.params['id'];
    if (confirm("Are you sure to delete")){
       this.apiser.deleteRestaurantOwner(id).subscribe(
      
        (response)=>
        {
          console.log("Restaurant Owner Removed");
          this.router.navigate(['/'])
        }
       )
      }
      else{
        this.router.navigate(['/restauratowner',id])
      }
      
      if(this.isAdmin){
        this.router.navigate(['/customerget'])
    }
    else if(this.isRestaurantOwner){
    this.router.navigate(['/restaurantowner',id]); 
    }
  }
}
