import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { ValidationCongeComponent } from './component/validation-conge/validation-conge.component';
import { ConsultationCongeEmpComponent } from './component/consultation-conge-emp/consultation-conge-emp.component';
import { ConsultationCongeMangComponent } from './component/consultation-conge-mang/consultation-conge-mang.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ValidationCongeComponent,
    ConsultationCongeEmpComponent,
    ConsultationCongeMangComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    //HttpClient,
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
