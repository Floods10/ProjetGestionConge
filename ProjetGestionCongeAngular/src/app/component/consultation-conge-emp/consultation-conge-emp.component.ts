import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/service/conge-service';
import { Conge } from 'src/app/model/conge';
import { Utilisateur } from 'src/app/model/utilisateur';
import { FormGroup } from '@angular/forms';
import { EnumTypeConge } from './../../model/enum-type-conge.enum';

@Component({
  selector: 'app-consultation-conge-emp',
  templateUrl: './consultation-conge-emp.component.html',
  styleUrls: ['./consultation-conge-emp.component.css'],
})
export class ConsultationCongeEmpComponent implements OnInit {
  conges: Conge[];
  idManager: number;
  dateDebut: Date;
  dateFin: Date;
  enumTypeConge = EnumTypeConge;

  constructor(private congeService: CongeService) {}

  ngOnInit(): void {
    this.list();
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
}
