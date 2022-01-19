import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Fournisseur} from "../classe/fournisseur";
import {FournisseurService} from "../service/fournisseur.service";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  //@ts-ignore
  fournisseurs:Fournisseur[]
  @ViewChild('closeModal') closeModal: ElementRef | undefined
  //@ts-ignore
  fournisseur:Fournisseur={
   nom:"",
   adresse:"",
   numTel:0,
   numCompte:0

}
  constructor(private  fournisseurService:FournisseurService) {

  }
  onGetAllFournisseurs() {
    this.fournisseurService.findAll().subscribe(data => {
      this.fournisseurs = data
    })
  }
  ngOnInit(): void {
   this.onGetAllFournisseurs()
  }

  onDelete(id:number=0) {
    if(window.confirm("Etes vous sûr de vouloir supprimer ce fournisseur ?")) {
      console.log(id)
      this.fournisseurService.delete(id).subscribe(
        data => {
          console.log(data);
          this.onGetAllFournisseurs()
          //this.back()
        }, err => {
          console.log(err);
        })
    }
  }

  onAddFournisseur() {
    this.fournisseurService.save(this.fournisseur).subscribe(
      (response : Fournisseur) => {
        console.log("response : ", response);
        // @ts-ignore
        this.closeModal.nativeElement.click()
        this.onGetAllFournisseurs();
      }
    )
  }
}
