import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../../classe/fournisseur";
import {ActivatedRoute, Router} from "@angular/router";
import {FournisseurService} from "../../service/fournisseur.service";

@Component({
  selector: 'app-editfournisseur',
  templateUrl: './editfournisseur.component.html',
  styleUrls: ['./editfournisseur.component.css']
})
export class EditfournisseurComponent implements OnInit {

  fournisseur : Fournisseur | undefined
  id : number = 0
  s_id: number = -1
  constructor(private route: ActivatedRoute,
              private router: Router,
              private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.route.snapshot.paramMap.get('id');
    this.fournisseurService.getFournisseur(this.id).subscribe(fournisseur => {
      this.fournisseur = fournisseur;
      console.log(this.fournisseur);
    })
  }


  onEditFournisseur(fournisseur: Fournisseur) {
    this.fournisseurService.update(fournisseur).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("fournisseur")
      }, err => {
        console.log(err);
      })
  }
}
