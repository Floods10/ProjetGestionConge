import { element } from 'protractor';
import { EnumRole } from './../../model/enum-role.enum';
import { Utilisateur } from './../../model/utilisateur';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nom = '';
  utilisateur: Utilisateur = new Utilisateur();
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.nom = params.nom;
    });
  }

  nouvelleDemande(): void
  {
    this.router.navigate(['/demande-conge'])
  }

  voirSesConges(): void
  {
    this.router.navigate(['/consultation-conge-emp']);
  }

  isVisible(): boolean {
    return this.utilisateur.role == EnumRole.ROLE_EMPLOYE  ? false : true;
  }

}
