import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../../classe/fournisseur";
import {ActivatedRoute, Router} from "@angular/router";
import {FournisseurService} from "../../service/fournisseur.service";
import {ProduitService} from "../../service/produit.service";
import {Produit} from "../../classe/produit";

@Component({
  selector: 'app-editproduit',
  templateUrl: './editproduit.component.html',
  styleUrls: ['./editproduit.component.css']
})
export class EditproduitComponent implements OnInit {

  produit : Produit | undefined
  id : number = 0
  s_id: number = -1
  constructor(private route: ActivatedRoute,
              private router: Router,
              private produitService: ProduitService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.route.snapshot.paramMap.get('id');
    this.produitService.getProduit(this.id).subscribe(produit => {
      this.produit = produit;
      console.log(this.produit);
    })
  }


  onEditProduit(produit: Produit) {
    this.produitService.update(produit).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("produit")
      }, err => {
        console.log(err);
      })
  }

}
