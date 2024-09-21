import { Component } from '@angular/core';
import { User } from '../User';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customerbyid',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './customerbyid.component.html',
  styleUrl: './customerbyid.component.css'
})
export class CustomerbyidComponent {
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

  exploreRestaurant(): void {
    if (this.user?.userId) {  // Safely check if user and userId exist
      this.router.navigate(['/restaurant', this.user.userId]);
    }
  }

  editAccount(): void {
    if (this.user) {
      this.router.navigate(['/customerput', this.user.userId]);
    }
  }

  deleteAccount(): void {
    if(this.user){
      this.router.navigate(['/customerdelete',this.user.userId]);
    }
  }
}
