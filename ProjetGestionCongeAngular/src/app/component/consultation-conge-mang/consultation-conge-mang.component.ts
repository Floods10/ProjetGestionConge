import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/service/conge-service';
import { Conge } from 'src/app/model/conge';
import { Utilisateur } from 'src/app/model/utilisateur';

@Component({
  selector: 'app-consultation-conge-mang',
  templateUrl: './consultation-conge-mang.component.html',
  styleUrls: ['./consultation-conge-mang.component.css'],
})
export class ConsultationCongeMangComponent implements OnInit {
  conges: Conge[];

  constructor(private congeService: CongeService) {}

  ngOnInit(): void {
    this.list();
  }

  delete(id: number) {
    this.congeService.delete(id).subscribe((res) => {
      this.list();
    });
  }

  private list() {
    this.congeService.getAllConge().subscribe((data) => {
      this.conges = data;
      this.conges.forEach((conge) => {
        console.log(conge.demandeur);
      });
    });
  }
}
