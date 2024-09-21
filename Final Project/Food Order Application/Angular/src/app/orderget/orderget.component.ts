import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Delivery } from '../Delivery';

@Component({
  selector: 'app-orderget',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './orderget.component.html',
  styleUrl: './orderget.component.css'
})
export class OrdergetComponent {
  data: any;
 

  constructor(private apiser: ApiService, private router: Router) {
    
  }
  ngOnInit(): void {
    this.apiser.getorder().subscribe(
      (response) => {
        this.data = response;
        
      }
    );

  }

  back(){
    this.router.navigate(['/']);
  }
 
  viewOrderDetails(id:number){
    this.router.navigate(['/orderdetails',id]);
  }

}
