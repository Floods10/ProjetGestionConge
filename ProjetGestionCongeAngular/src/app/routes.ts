import { CanActivateService } from './service/can-activated';
import { Routes } from '@angular/router';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { ConsultationCongeEmpComponent } from './component/consultation-conge-emp/consultation-conge-emp.component';
import { ConsultationCongeMangComponent } from './component/consultation-conge-mang/consultation-conge-mang.component';
import { HomeComponent } from './component/home/home.component';
import { ValidationCongeComponent } from './component/validation-conge/validation-conge.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'consultation-conge-emp', component: ConsultationCongeEmpComponent},
  { path: 'consultation-conge-mang', component: ConsultationCongeMangComponent,
  canActivate: [CanActivateService], },
  { path: 'validation-conge', component: ValidationCongeComponent,
  canActivate: [CanActivateService],  },

];
