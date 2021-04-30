import { EnumStatutDemande } from './../../model/enum-statut-demande.enum';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EnumTypeConge } from 'src/app/model/enum-type-conge.enum';
/*import { Observable } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';*/
import { CongeService } from 'src/app/service/conge-service';
import { Conge } from 'src/app/model/conge';
import { Utilisateur } from 'src/app/model/utilisateur';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultation-conge-emp',
  templateUrl: './consultation-conge-emp.component.html',
  styleUrls: ['./consultation-conge-emp.component.css'],
})
export class ConsultationCongeEmpComponent implements OnInit {
  //nom = '';
  dateDemande: string;
  dateDebut: Date;
  dateFin: Date;
  duree: number;
  enumTypeConge = EnumTypeConge;
  enumStatutDemande = EnumStatutDemande;
  motifConge: string;
  //dateFinCtrl: FormControl;
  conges: Conge[];
  newConge: Conge;
  idManager: number;
  userConnected: Utilisateur;

  constructor(
    private datePipe: DatePipe,
    private congeService: CongeService /*private fb: FormBuilder, private inscriptionService: InscriptionService*/
  ) {
    this.dateDemande = datePipe.transform(Date.now(), 'yyyy-MM-dd');
    this.duree = 0;
    /*  this.dateFinCtrl = this.fb.control(
      '',
      [Validators.required, Validators.minLength(3)],
      this.controlDateFin()
    );*/
  }

  /* controlDateFin(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.inscriptionServie.checkLogin(control.value).pipe(
        debounceTime(500),
        map((result: boolean) => {
          return result ? { loginExist: true } : null;
        })
      );
    };
  }*/
  /*
  dureeOnClick() {
    var Time = this.dateDebut.getTime() - this.dateFin.getTime();
    this.duree = Time / (1000 * 3600 * 24);
    console.log(this.duree);
  }*/
  ngOnInit(): void {
    this.list();
    this.newConge = new Conge();
    this.userConnected = new Utilisateur(2, 'dodo', 'dodo@gmail.com');
    console.log('1: ' + this.userConnected.nom);
  }
  /*
  private _demandeur?: Utilisateur,
  private _dateDemande?: Date,
  private _dateDebut?: Date,
  private _dateFin?: Date,
  private _duree: number = 0,
  private _typeConge: EnumTypeConge = EnumTypeConge.congePaye,
  private _motifConge: string = 'Motif non renseigné',
  private _statutDemande: EnumStatutDemande = EnumStatutDemande.attente,
  private _commentaireSiRefuse: string = 'Motif de refus non renseigné'
*/
  public get pseudo() {
    return localStorage.getItem('nom');
  }
  save() {
    this.userConnected.id = Number(localStorage.getItem('id'));

    this.newConge.demandeur = this.userConnected;

    this.newConge.dateDemande = new Date();

    if (this.newConge.dateDebut) {
      this.newConge.dateDebut = this.dateDebut;
    } else {
      this.newConge.dateDebut = new Date();
    }

    if (this.newConge.dateFin) {
      this.newConge.dateFin = this.dateFin;
    } else {
      this.newConge.dateFin = new Date();
    }

    //this.newConge.duree = 'this.duree';
    //this.newConge.typeConge = this.enumTypeConge.absenceAutorisee;

    if (this.motifConge) {
      this.newConge.motifConge = this.motifConge;
    } else {
      this.newConge.motifConge = '';
    }

    this.newConge.statutDemande = this.enumStatutDemande.attente;
    this.newConge.commentaireSiRefuse = '';

    if (this.newConge.typeConge !== 'congePaye') {
      console.log(this.newConge.typeConge);
      this.congeService
        .postConge(this.newConge, this.newConge.typeConge['key'])
        .subscribe();
    } else {
      console.log('!!');
      this.congeService.postConge(this.newConge, 'congePaye').subscribe();
    }

    location.reload();
  }

  public list() {
    if (localStorage.getItem('id')) {
      this.congeService
        .getCongeByDemandeur(Number(localStorage.getItem('id')))
        .subscribe((data) => {
          this.conges = data;
        });
    }
  }
  annulerChamp() {
    location.reload();
  }
}
