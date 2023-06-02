import { Injectable } from '@angular/core';
import { HttpClient as HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly httpClient: HttpClient) {}

  private BASE_URL: string = 'https://api.escuelajs.co/api/v1/users/';

  isActive: boolean = false;

  getUser(id: number) {
    return this.httpClient.get(this.BASE_URL.concat(id.toString()));
  }

  changeIsActive() {
    this.isActive = true;
    localStorage.setItem('isActive', 'true');
    return this.isActive;
  }

  getActive() {
    return this.isActive;
  }
}
