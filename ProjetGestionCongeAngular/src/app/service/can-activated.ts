import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class CanActivateService implements CanActivate{
  constructor() {}

  canActivate(): boolean {
    console.log(localStorage.getItem('role'))
    if(localStorage.getItem('role')=='ROLE_MANAGER'){
    return true; }
    return false;
  }
}
