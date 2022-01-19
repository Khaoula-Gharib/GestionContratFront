import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProduitService} from "../service/produit.service";
import {Produit} from "../classe/produit";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
 //@ts-ignore
  produits:Produit[]

  //@ts-ignore
  produit:Produit={
    nom:"",
    description:"",
    prix:0
  }

  constructor(private  produitService:ProduitService) {

  }

  onGetAllProduits() {
    this.produitService.findAll().subscribe(data => {
      this.produits = data
    })
  }
  ngOnInit(): void {
    this.onGetAllProduits()
  }

  onDelete(id:number=0) {
    if(window.confirm("Etes vous sûr de vouloir supprimer ce produit ?")) {
      console.log(id)
      this.produitService.delete(id).subscribe(
        data => {
          console.log(data);
          this.onGetAllProduits()
          //this.back()
        }, err => {
          console.log(err);
        })
    }
  }

  onAddProduit() {
    this.produitService.save(this.produit).subscribe(
      (response : Produit) => {
        this.produit=response
        console.log("response : ", response);
        // @ts-ignore
        this.closeModal.nativeElement.click()
        this.onGetAllProduits();
      }
    )
  }

}
