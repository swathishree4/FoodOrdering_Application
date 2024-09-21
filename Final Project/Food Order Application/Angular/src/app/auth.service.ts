import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from './User';

import { jwtDecode } from 'jwt-decode';
import { Token } from './Token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl='https://localhost:7188/api/Token';
 private tokenKey = 'jwtToken'; // Use the correct key for localStorage
 private userRoleSubject = new BehaviorSubject<string>('');
 userRole$ = this.userRoleSubject.asObservable();

 constructor(private http: HttpClient, private router: Router) 
 { 
   this.setUserRoleFromToken();
 }

 login(login:User): Observable<Token> {
   console.log("welcome");
   return this.http.post<Token>(this.apiUrl, login).pipe(
     tap(response => {
       localStorage.setItem('token', response.token); // Store the token in localStorage
       this.setUserRoleFromToken(); // Update user role
       this.router.navigate(['/']); // Navigate to home or dashboard
     })
   );
   
 }
 setUserRoleFromToken(): void {
   const token = this.getToken();
   if (token) {
     try {
       const decodedToken: any = jwtDecode(token);
       this.userRoleSubject.next(decodedToken.role || '');
     } catch (e) {
       console.error('Error decoding token:', e);
       this.userRoleSubject.next('');
     }
   } else {
     this.userRoleSubject.next('');
   }
 }
 
 getToken(): string | null {
   return localStorage.getItem('token');
   
 }

 isAuthenticated(): boolean {
  const token = localStorage.getItem('token');
  return !!token;
}

hasRole(requiredRole: string): boolean {
  const token = this.getToken();
  if (!token) return false;
  try {
    const decodedToken: any = jwtDecode(token);
    return decodedToken.role === requiredRole;
  } catch (e) {
    console.error('Error decoding token:', e);
    return false;
  }
}
getUserRole(): string {
  return this.userRoleSubject.value;
}

isAdmin(): boolean {
  return this.getUserRole() === 'Admin';
}
isCustomer():boolean{
  return this.getUserRole()==='Customer';
}
isDeliveryStaff():boolean{
  return this.getUserRole()==='DeliveryStaff'
}


isRestaurantOwner():boolean{
  return this.getUserRole()==='RestaurantOwner'
}
logout() {
  localStorage.removeItem(this.tokenKey);
  this.router.navigate(['/login']);
}
}