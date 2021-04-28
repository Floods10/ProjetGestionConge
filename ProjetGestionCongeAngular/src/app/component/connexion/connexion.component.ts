import { Utilisateur } from './../../model/utilisateur';
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
    private router: Router
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
        localStorage.setItem('utilisateur', this.utilisateur.mail);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.message = "Erreur d'authentification";
      }
    );
  }

}
