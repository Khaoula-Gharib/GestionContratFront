import { Component, OnInit } from '@angular/core';
import {Contrat} from "../classe/contrat";
import {ContratService} from "../service/contrat.service";

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {

  //@ts-ignore
  contrats:Contrat[]

  //@ts-ignore
  contrat:Contrat={
    libelle:"",
    description:""
  }

  constructor(private  contratService:ContratService) {

  }

  onGetAllContrats() {
    this.contratService.findAll().subscribe(data => {
      this.contrats = data
    })
  }
  ngOnInit(): void {
    this.onGetAllContrats()
  }

  onDelete(id:number=0) {
    if(window.confirm("Etes vous sûr de vouloir supprimer ce contrat ?")) {
      console.log(id)
      this.contratService.delete(id).subscribe(
        data => {
          console.log(data);
          this.onGetAllContrats()
          //this.back()
        }, err => {
          console.log(err);
        })
    }
  }

  onAddContrat() {
    this.contratService.save(this.contrat).subscribe(
      (response : Contrat) => {
        this.contrat=response
        console.log("response : ", response);
        // @ts-ignore
        this.closeModal.nativeElement.click()
        this.onGetAllContrats();
      }
    )
  }


}
