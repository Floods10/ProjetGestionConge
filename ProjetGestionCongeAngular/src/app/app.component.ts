import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetGestionCongeAngular';
  public constructor(private router: Router) {}

  public get utilisateur(): string {
    return localStorage.getItem('mail');
  }

  log(): void
  {
    this.router.navigate(['../connexion'])
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['../home']);
  }
  isVisible(): boolean {
    if(localStorage.getItem('role')=='ROLE_MANAGER'){
      return true; }
      return false;
   }
}
