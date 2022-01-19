import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FournisseurComponent} from "./fournisseur/fournisseur.component";
import {EditfournisseurComponent} from "./edit/editfournisseur/editfournisseur.component";
import {ProduitComponent} from "./produit/produit.component";
import {EditproduitComponent} from "./edit/editproduit/editproduit.component";
import {LigneProduitComponent} from "./ligne-produit/ligne-produit.component";
import {EditligneProduitComponent} from "./edit/editligne-produit/editligne-produit.component";
import {ContratComponent} from "./contrat/contrat.component";
import {EditContratComponent} from "./edit/edit-contrat/edit-contrat.component";

const routes: Routes = [
  {
    path:'fournisseur',component:FournisseurComponent

  },
  {
    path : "fournisseur/:id", component: EditfournisseurComponent
  },
  {
    path:'produit',component:ProduitComponent
  },
  {
    path : "produit/:id", component: EditproduitComponent
  },
  {
    path:'ligneproduit',component:LigneProduitComponent

  },
  {
    path : "ligneproduit/:id", component: EditligneProduitComponent
  },
  {
    path:'contrat',component:ContratComponent
  },
  {
    path : "contrat/:id", component: EditContratComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
