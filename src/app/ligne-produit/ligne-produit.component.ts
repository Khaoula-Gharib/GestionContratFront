import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Fournisseur} from "../classe/fournisseur";
import {LigneProduit} from "../classe/ligne-produit";
import {LigneProduitService} from "../service/ligne-produit.service";

@Component({
  selector: 'app-ligne-produit',
  templateUrl: './ligne-produit.component.html',
  styleUrls: ['./ligne-produit.component.css']
})
export class LigneProduitComponent implements OnInit {

  //@ts-ignore
  ligneProduits:LigneProduit[]
  @ViewChild('closeModal') closeModal: ElementRef | undefined
  //@ts-ignore
  ligneProduit:LigneProduit={
    quantite:0

  }
  constructor(private  ligneProduitService:LigneProduitService) {

  }
  onGetAllLigneProduits() {
    this.ligneProduitService.findAll().subscribe(data => {
      this.ligneProduits = data
    })
  }
  ngOnInit(): void {
    this.onGetAllLigneProduits()
  }

  onDelete(id:number=0) {
    if(window.confirm("Etes vous sûr de vouloir supprimer cette ligne de produit?")) {
      console.log(id)
      this.ligneProduitService.delete(id).subscribe(
        data => {
          console.log(data);
          this.onGetAllLigneProduits()
          //this.back()
        }, err => {
          console.log(err);
        })
    }
  }

  onAddLigneProduit() {
    this.ligneProduitService.save(this.ligneProduit).subscribe(
      (response : Fournisseur) => {
        console.log("response : ", response);
        // @ts-ignore
        this.closeModal.nativeElement.click()
        this.onGetAllLigneProduits();
      }
    )
  }

}
