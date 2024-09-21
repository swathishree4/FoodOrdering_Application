import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RestaurantownerComponent } from './restaurantowner/restaurantowner.component';
import { DeliverystaffComponent } from './deliverystaff/deliverystaff.component';
import { CustomerbyidComponent } from './customerbyid/customerbyid.component';
import { CustomerdeleteComponent } from './customerdelete/customerdelete.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomergetComponent } from './customerget/customerget.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
// import { CustomergetComponent } from './customerget/customerget.component';
 import { CustomerputComponent } from './customerput/customerput.component';
import { DeliverystaffputComponent } from './deliverystaffput/deliverystaffput.component';
import { DeliverystaffdeleteComponent } from './deliverystaffdelete/deliverystaffdelete.component';
import { DeliverystaffgetComponent } from './deliverystaffget/deliverystaffget.component';
import { RestaurantownerputComponent } from './restaurantownerput/restaurantownerput.component';
import { RestaurantownerdeleteComponent } from './restaurantownerdelete/restaurantownerdelete.component';
import { RegisterComponent } from './register/register.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { RegisterdeliverystaffComponent } from './registerdeliverystaff/registerdeliverystaff.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { OrderComponent } from './order/order.component';
import { OrdergetComponent } from './orderget/orderget.component';
import { OrderDetailsComponent } from './order-details/order-details.component';




export const routes: Routes = [
    {path:'',component:LoginComponent},

    {path:'restaurant-owner',component:RestaurantownerComponent},
    {path:'deliverystaff/:id',component:DeliverystaffComponent},
    {path:'customerbyid/:id',component:CustomerbyidComponent},
    {path:'restaurantowner/:id',component:RestaurantownerComponent},
    {path:'customerdelete/:id',component:CustomerdeleteComponent},
    {path:'adminlogin',component:AdminloginComponent},
    {path:'customerget',component:CustomergetComponent},
    {path:'restaurant/:id',component:RestaurantComponent},
    {path:'customerput/:id',component:CustomerputComponent},
    {path:'deliverystaffput/:id',component:DeliverystaffputComponent},
    {path:'deliverystaffdelete/:id',component:DeliverystaffdeleteComponent},
    {path:'deliverystaffget',component:DeliverystaffgetComponent},
    {path:'restaurantownerput/:id',component:RestaurantownerputComponent},
    {path:'restaurantownerdelete/:id',component:RestaurantownerdeleteComponent},
    {path:'register',component:RegisterComponent},
    { path: 'menuItems/:id', component: MenuitemComponent },
    {path:'registerdeliverystaff',component:RegisterdeliverystaffComponent},
    { path: 'restaurant/:id/menuitems/addtocart', component:AddtocartComponent },
    {path:'addmenu',component:AddmenuComponent},
    {path:'order',component:OrderComponent},
    {path:'orderget',component:OrdergetComponent},
    {path:'orderdetails/:id',component:OrderDetailsComponent},
    {path:'restaurantowner/:id',component:RestaurantownerComponent},
    { path: 'restaurant/:id/add-menu-item', component: AddmenuComponent }

   

];
