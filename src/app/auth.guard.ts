import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is authenticated (e.g., token exists in local storage)
    const token = localStorage.getItem('token');

    if (token) {
      // If authenticated, allow access to the route
      return true;
    } else {
      // If not authenticated, redirect to the login page
      // this.router.navigate(['/']);
      return false;
    }
  }
}
