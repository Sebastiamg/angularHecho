import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './loginService';

@Injectable({
  providedIn: 'root',
})
export class LoginGardGuard implements CanLoad {
  constructor(private readonly loginService: LoginService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isActive = Boolean(localStorage.getItem('isActive'));
    if (isActive) {
      return true;
    }

    window.location.href = '/login'
    return false;
  }
}
