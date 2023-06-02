import { Component } from '@angular/core';
import { LoginService } from './loginService';

interface Data {
  email: string;
  passwod: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private readonly loginService: LoginService) {}
  email: string = '';
  passwod: string = '';

  logIn() {
    this.loginService.changeIsActive();
    return (window.location.href = 'http://localhost:4200/pag/product');
  }
  ngOnInit(): void {
    localStorage.removeItem('isActive')
  }
}
/* <!-- MICHAEL SEBASTIAN ORTIZ JARRIN --> */
