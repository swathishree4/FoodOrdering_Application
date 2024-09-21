import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuItem } from '../menuitem';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menuitem',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './menuitem.component.html',
  styleUrl: './menuitem.component.css'
})
export class MenuitemComponent implements OnInit {
  menuItems: MenuItem[] =[];
  restaurantId!: number;

  constructor(
    private appService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restaurantId = +this.route.snapshot.paramMap.get('id')!;
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.appService.getMenuItems(this.restaurantId).subscribe(
      (items) => {
        this.menuItems = items;
      },
      (error) => {
        console.error('Error fetching menu items', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/restaurant',this. restaurantId]);
  }

  addToCart(item: MenuItem) {
    this.appService.addToCart(item); 
    this.router.navigate(['/restaurant', this.restaurantId, 'menuitems', 'addtocart']); 
  }

  home(){
    this.router.navigate(['/']);
  }
 
  
}
