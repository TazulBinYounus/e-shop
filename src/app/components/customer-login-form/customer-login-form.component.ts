import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-customer-login-form',
  templateUrl: './customer-login-form.component.html',
  styleUrls: ['./customer-login-form.component.css']
})
export class CustomerLoginFormComponent {

  errorMessageshow:boolean = false;
  errorMessage: string = '';
  isLoading = false;

  ngOnInit(): void {
  }

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  onSubmit() {
    this.isLoading = true;
    this.errorMessageshow = false;
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    const credentials = { email: username, password: password };
    this.authService.login(credentials).subscribe(
      response => {
        this.isLoading = false;
        console.log('Login response:', response);
        if(response?.success === true){
          localStorage.setItem('token', response?.data?.token);
        }else{
          this.errorMessageshow = true;
          this.errorMessage = response?.data?.error ?? 'Invalid username or password';
          setTimeout(()=>{                           //<<<---using ()=> syntax
            this.errorMessageshow = false;
          }, 3000);
        }
        
      },
      error => {
        this.isLoading = false;
        console.error('Login error:', error);
        this.errorMessageshow = true;
        this.errorMessage = error?.data?.error ?? 'Invalid username or password';
        setTimeout(()=>{                           //<<<---using ()=> syntax
          this.errorMessageshow = false;
        }, 3000);
        // Handle the error here
      }
    );
  }

  logout() {
    // alert('asd');
    localStorage.removeItem('token');
    // this.authService.logout();
  }

}
