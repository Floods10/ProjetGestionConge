import { Router, ActivatedRoute } from '@angular/router';
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
  conge : Conge= new Conge();


  constructor(
    private congeService: CongeService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.list(this.idDemandeur);
   console.log(this.congeService.getByManager(3));
  }

  list(idDemandeur: number){
    if (idDemandeur){
      this.conges = this.congeService.getCongeByDemandeur(this.idDemandeur);
    } else {
      this.conges = this.congeService.getByManager(3);
    }

  };



  refuserDemande(id: number,com:string) {
    this.congeService.refuserConge(id,com).subscribe((data) => {
      this.router.navigate(['./validation-conge.component.html'])
    });

  }

  validerDemande(id: number){
    this.congeService.validerConge(id).subscribe((data) => {
      this.router.navigate(['./validation-conge.component.html'])
    });
  }


}
