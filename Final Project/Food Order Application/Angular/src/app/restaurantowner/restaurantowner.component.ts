import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../User';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-restaurantowner',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './restaurantowner.component.html',
  styleUrl: './restaurantowner.component.css'
})
export class RestaurantownerComponent {
  user: User | undefined;

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
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

 

  editAccount(): void {
    if (this.user) {
      this.router.navigate(['/restaurantownerput', this.user.userId]);
    }
  }

  deleteAccount(): void {
    if(this.user){
      this.router.navigate(['/restaurantownerdelete',this.user.userId]);
    }
  }

  addmenu(): void {
  if(this.user){
      this.router.navigate(['/addmenu', this.user.userId]);
  }
  }

  registerrestaurant(){
    this.router.navigate(['/add-restaurant']);
  }
}
