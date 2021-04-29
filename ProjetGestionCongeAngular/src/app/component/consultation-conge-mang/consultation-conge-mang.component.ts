import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/service/conge-service';
import { Conge } from 'src/app/model/conge';
import { Utilisateur } from 'src/app/model/utilisateur';
import { FormGroup } from '@angular/forms';
import { EnumTypeConge } from './../../model/enum-type-conge.enum';

@Component({
  selector: 'app-consultation-conge-mang',
  templateUrl: './consultation-conge-mang.component.html',
  styleUrls: ['./consultation-conge-mang.component.css'],
})
export class ConsultationCongeMangComponent implements OnInit {
  conges: Conge[];
  idManager: number;
  dateDebut: Date;
  dateFin: Date;

  constructor(private congeService: CongeService) {}

  ngOnInit(): void {
    this.list();
  }

  delete(id: number) {
    this.congeService.delete(id).subscribe((res) => {
      this.list();
    });
  }

  public list() {
    if (this.idManager && this.dateDebut && this.dateFin) {
      this.congeService
        .getCongeEntreDeuxDatesByManager(
          this.idManager,
          this.dateDebut,
          this.dateFin
        )
        .subscribe((data) => {
          this.conges = data;
        });
    }
    if (this.idManager) {
      this.congeService.getByManager(this.idManager).subscribe((data) => {
        this.conges = data;
      });
    } else {
      this.congeService.getAllConge().subscribe((data) => {
        this.conges = data;
      });
    }
  }
}
