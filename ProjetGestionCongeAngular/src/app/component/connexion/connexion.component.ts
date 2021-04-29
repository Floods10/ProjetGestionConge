import { Observable } from 'rxjs';
import { Utilisateur } from './../../model/utilisateur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/auth';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  message: string;


  constructor(
    private authentificationService: AuthentificationService,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  }

  send() {
    this.authentificationService.getAuthApi(this.utilisateur).subscribe(
      (res) => {
        this.message = null;
        localStorage.setItem(
          'auth',
          btoa(this.utilisateur.mail + ':' + this.utilisateur.mdp)
        );
        this.router.navigate(['/home']);
      },
      (error) => {
        this.message = "Erreur d'authentification";
      }
    );

    this.http.get<Observable<Utilisateur>>('http://127.0.0.1:8080/conges/api/utilisateur/'+ this.utilisateur.mail).subscribe (
           (data) => {
          }
         )

  }

}
