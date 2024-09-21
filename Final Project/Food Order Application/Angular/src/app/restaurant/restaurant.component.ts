import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit{
  restaurants: any[] = []; // To store the restaurant data
  userId: number = 0;  

  
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.userId = +this.route.snapshot.params['id'];
    this.apiService.getRestaurants().subscribe((data: any[]) => {
      this.restaurants = data; 
    });
  }

  viewDetails(id: number): void {
    this.router.navigate([`/menuItems/${id}`]); 
  }

  home(): void {
    this.router.navigate(['/customerbyid', this.userId]); 
  }

  editAccount(){
    this.router.navigate(['/customerput', this.userId]);
  }

  deleteAccount(){
    this.router.navigate(['/customerdelete',this.userId]);
  }

 }
