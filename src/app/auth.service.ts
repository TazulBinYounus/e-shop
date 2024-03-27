import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost:8000/api';
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }


  isLoggedIn(): boolean {
    // Check if the user is logged in (e.g., check if token exists in local storage)
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  // get isLoggedIn() {
  //   return this.loggedIn.asObservable();
  // }


  // isLoggedIn() {
  //   return this.loggedIn.asObservable();
  // }

  login(credentials: { email: string, password: string }): Observable<any> {
    console.log('Attempting login with credentials:', credentials);
    console.log(this.apiUrl + '/login');
    return this.http.post(this.apiUrl + '/login', credentials);
  }

      // return this.http.post(this.apiUrl + '/login', credentials).pipe(
    //   tap(response => {
    //     // alert('response')
    //     console.log('Login response:', response);
    //     // if (response.token) {
    //     //   console.log('Token received:', response.token);
    //     //  
    //     // }
    //   }),
    //   catchError(error => {
    //     console.error('Login error:', error);
    //     throw error;
    //   })
    // );

  logout() {
    localStorage.removeItem('token');
    return true;
  }
}
