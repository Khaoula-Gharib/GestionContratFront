import { Component, OnInit } from '@angular/core';
import {Produit} from "../../classe/produit";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../../service/produit.service";
import {Contrat} from "../../classe/contrat";
import {ContratService} from "../../service/contrat.service";

@Component({
  selector: 'app-edit-contrat',
  templateUrl: './edit-contrat.component.html',
  styleUrls: ['./edit-contrat.component.css']
})
export class EditContratComponent implements OnInit {

  contrat : Contrat | undefined
  id : number = 0
  s_id: number = -1
  constructor(private route: ActivatedRoute,
              private router: Router,
              private contratService: ContratService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.route.snapshot.paramMap.get('id');
    this.contratService.getContrat(this.id).subscribe(contrat => {
      this.contrat = contrat;
      console.log(this.contrat);
    })
  }


  onEditContrat(contrat: Contrat) {
    this.contratService.update(contrat).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("contrat")
      }, err => {
        console.log(err);
      })
  }

}
