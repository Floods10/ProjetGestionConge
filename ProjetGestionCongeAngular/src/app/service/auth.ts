import { Utilisateur } from './../model/utilisateur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(private http: HttpClient) {}

  public authentification(utilisateur: Utilisateur) {}

  public getAuthApi(utilisateur: Utilisateur): Observable<void> {
    const texte: string = `${utilisateur.mail}:${utilisateur.mdp}`;
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: `Basic ${btoa(texte)}`,
    });
    return this.http.get<void>('http://127.0.0.1:8080/projet/api/auth/login', {
      headers: headers,
    });
  }
}
