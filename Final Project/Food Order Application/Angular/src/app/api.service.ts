import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';
import { MenuItem } from './menuitem';
import { CartItem } from './CartItem';
import { Order } from './order';
import { Delivery } from './Delivery';
import { Restaurant } from './Restaurant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiurl="https://localhost:7188/api/Restaurants"
  private userurl="https://localhost:7188/api/Users"
  private baseUrl  = "https://localhost:7188/api/MenuItems";
  private orderurl="https://localhost:7188/api/Orders";
  private delurl="https://localhost:7188/api/Deliveries";
  httpClient: any;
  
  private cart: MenuItem[] = [];
  constructor(private http:HttpClient) {

   }
   
   get():Observable<any>{
    return this.http.get(this.userurl)
   }
   
   getorder():Observable<any>{
    return this.http.get(this.orderurl);
   }
   getDeliveryStaff():Observable<any>{
    return this.http.get(`${this.userurl}/deliveryStaff`)
   }
   getDeliveryByStaffID(id:number):Observable<any>{
    return this.http.get(`${this.delurl}/byDeliveryStaff/${id}`)
   }
   postcomp(user:User):Observable<any>{
    return this.http.post<any>(`${this.userurl}`,user);
  }
  postDelivery(del:Delivery):Observable<any>{
    return this.http.post<any>(`${this.delurl}`,del);
  }
  addMenuItem(restaurantId: number, menuItem: MenuItem): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`,menuItem);
  }

  addRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http.post<any>(this.apiurl, restaurant);
  }

  postorder(order:Order):Observable<any>{
    return this.http.post<any>(`${this.orderurl}`,order);
  }

  postrestaurant(res:Restaurant):Observable<any>{
    return this.http.post<any>(`${this.userurl}`,res);
  }

  
  getbyid(id:number):Observable<any>{
    return this.http.get(`${this.userurl}/${id}`);
  }
  getmenubyid(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getRestaurantbyOwnerid(id:number):Observable<any>{
    return this.http.get(`${this.apiurl}/GetRestaurantByOwner/${id}`);
  }
  getOrderById(id:number):Observable<any>{
    return this.http.get(`${this.orderurl}/${id}`);
  }
 
  clearCart(): void {
    this.cart = [];
  }
  deletecust(id:number):Observable<any>
  {
    return this.http.delete<any>(`${this.userurl}/${id}`)
  }

  deleteDeliveryStaff(id:number):Observable<any>
  {
    return this.http.delete<any>(`${this.userurl}/${id}`)
  }

  deleteRestaurantOwner(id:number):Observable<any>
  {
    return this.http.delete<any>(`${this.userurl}/${id}`)
  }

  getRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl);
  }
  
  getUserIdByEmail(email: string) {
    return this.http.get(`${this.userurl}/getUserIdByEmail/${email}`);
  }
  getDeliveryByOrderId(id:number){
    return this.http.get(`${this.delurl}/byOrderId/${id}`);
  }

  updateCust(id:number,user: User): Observable<User> {
    return this.http.put<User>(`${this.userurl}/${id}`,user);
  }

  updateDeliveryStaff(id:number,user: User): Observable<User> {
    return this.http.put<User>(`${this.userurl}/${id}`,user);
  }

  updateRestaurantOwner(id:number,user: User): Observable<User> {
    return this.http.put<User>(`${this.userurl}/${id}`,user);
  }

  updateDeliveryStatus(id:number): Observable<Delivery> {
    return this.http.put<Delivery>(`${this.delurl}/markAsSuccess/${id}`,'');
  }

  getMenuItems(restaurantId: number): Observable<MenuItem[]> {
    const url = `${this.baseUrl}/restaurant/${restaurantId}/menu-items`;
    return this.http.get<MenuItem[]>(url);
  }

  addMenuItembyid(restaurantId: number, menuItem: MenuItem): Observable<MenuItem> {
    return this.http.post<MenuItem>(`${this.baseUrl}/restaurant/${restaurantId}/menu-items`, menuItem);
  }

  

  addToCart(item: MenuItem): void {
    this.cart.push(item); // Add the item to the cart
  }

  getCartItems(): MenuItem[] {
    return this.cart; // Return the cart items
  }
  
}
