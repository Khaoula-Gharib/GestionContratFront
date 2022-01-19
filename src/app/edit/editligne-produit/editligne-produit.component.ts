import { Component, OnInit } from '@angular/core';
import {Produit} from "../../classe/produit";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../../service/produit.service";
import {LigneProduit} from "../../classe/ligne-produit";
import {LigneProduitService} from "../../service/ligne-produit.service";

@Component({
  selector: 'app-editligne-produit',
  templateUrl: './editligne-produit.component.html',
  styleUrls: ['./editligne-produit.component.css']
})
export class EditligneProduitComponent implements OnInit {

  ligneProduit : LigneProduit | undefined
  id : number = 0
  s_id: number = -1
  constructor(private route: ActivatedRoute,
              private router: Router,
              private ligneProduitService: LigneProduitService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.route.snapshot.paramMap.get('id');
    this.ligneProduitService.getLigneProduit(this.id).subscribe(ligneProduit => {
      this.ligneProduit = ligneProduit;
      console.log(this.ligneProduit);
    })
  }


  onEditLigneProduit(ligneProduit: LigneProduit) {
    this.ligneProduitService.update(ligneProduit).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("ligneproduit")
      }, err => {
        console.log(err);
      })
  }


}
