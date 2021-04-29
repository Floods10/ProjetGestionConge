import { EnumStatutDemande } from 'src/app/model/enum-statut-demande.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conge } from 'src/app/model/conge';

@Injectable({
  providedIn: 'root',
})
export class CongeService {
  private static URL = 'http://127.0.0.1:8080/conges/api/conge';

  constructor(private http: HttpClient) {}

  public getAllConge(): Observable<Conge[]> {
    return this.http.get<Conge[]>(CongeService.URL);
  }
  public getByManager(id: number): Observable<Conge[]> {
    return this.http.get<Conge[]>(CongeService.URL + '/' + id + '/manager');
  }
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(CongeService.URL + '/' + id);
  }
  public getById(id: number): Observable<Conge> {
    return this.http.get<Conge>(CongeService.URL + '/' + id);
  }
  public getCongeByDemandeur(id: number): Observable<Conge[]> {
    return this.http.get<Conge[]>(CongeService.URL + '/' + id + '/demandeur');
  }
  public getCongeEntreDeuxDates(
    dateDebut: Date,
    dateFin: Date
  ): Observable<Conge> {
    return this.http.get<Conge>(
      CongeService.URL + '/' + dateDebut + '/' + dateFin
    );
  }
  public getCongeEntreDeuxDatesByManager(
    id: number,
    dateDebut: Date,
    dateFin: Date
  ): Observable<Conge[]> {
    return this.http.get<Conge[]>(
      CongeService.URL + '/' + id + '/' + dateDebut + '/' + dateFin + '/manager'
    );
  }
  public postConge(conge: Conge): Observable<Conge> {
    const congeFormate = {
      demandeur: {
        id: conge.demandeur.id,
      },
      dateDemande: conge.dateDemande,
      dateDebut: conge.dateDebut,
      dateFin: conge.dateFin,
      duree: conge.duree,
      typeConge: conge.typeConge,
      motifConge: conge.motifConge,
      statutDemande: conge.statutDemande,
      commentaireSiRefuse: conge.commentaireSiRefuse,
    };
    return this.http.post<Conge>(CongeService.URL, congeFormate);
  }
  public patchConge(id: number, body: Map<string, Object>): Observable<Conge> {
    return this.http.patch<Conge>(CongeService.URL + '/' + id, body);
  }
  public validerConge(id : number): Observable<Conge> {
    return this.http.patch<Conge>(
      CongeService.URL + '/' + id +'/validee',{});
  }

  public refuserConge(id : number,com : string): Observable<Conge> {
    return this.http.patch<Conge>(
      CongeService.URL + '/' + id +'/refus',{com});
  }
  }

