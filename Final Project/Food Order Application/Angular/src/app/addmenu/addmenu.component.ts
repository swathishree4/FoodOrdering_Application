import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { MenuItem } from '../menuitem';

@Component({
  selector: 'app-addmenu',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './addmenu.component.html',
  styleUrl: './addmenu.component.css'
})
export class AddmenuComponent {

  userId: number = 0; 
  menuItem :MenuItem= {
    name: '',
    description: '',
    price: 0,
    isAvailable: true,
    restaurantId: 0, 
    image: '',
    menuItemId: 0,
   
  };

  constructor(private apiService: ApiService, private router: Router,private route:ActivatedRoute) {
    const id=this.route.snapshot.params['id'];
    this.userId = +this.route.snapshot.params['id'];
    this.apiService.getRestaurantbyOwnerid(id).subscribe(
      (response)=>{
        this.menuItem.restaurantId=response
      }
    )
  }

  onSubmit() :void{
    this.apiService.addMenuItem(this.menuItem.menuItemId,this.menuItem).subscribe(response => {
      console.log('Menu item added:', response);
      this.router.navigate(['/menuItems', this.menuItem.restaurantId]); // Navigate to restaurant menu page
    }, error => {
      console.error('Error adding menu item:', error);
    });
  }

  goback(){
    this.router.navigate(['/']);
  }
}
