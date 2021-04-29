
import { CongeService } from '../../service/conge-service';
import { Conge } from './../../model/conge';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-validation-conge',
  templateUrl: './validation-conge.component.html',
  styleUrls: ['./validation-conge.component.css']
})
export class ValidationCongeComponent implements OnInit {
  conges: Observable <Conge[]>;
  idDemandeur: number;
  conge : Conge;

  constructor(private congeService: CongeService) { }

  ngOnInit(): void {
   this.list(this.idDemandeur);
  }

  list(idDemandeur: number){
    if (idDemandeur){
      this.conges = this.congeService.getCongeByDemandeur(this.idDemandeur);
    } else {
      this.conges = this.congeService.getByManager(3);
    }

  };



  refuserDemande(id: number) {
    this.congeService.delete(id).subscribe((res) => {
      this.congeService.getCongeByDemandeur(this.idDemandeur);
    });

  }

  validerDemande(id: number){
    this.congeService.postConge(this.conge).subscribe((data) => {
      this.conge = data;
    });
  }


}
