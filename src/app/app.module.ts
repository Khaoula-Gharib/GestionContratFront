import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import {FormsModule} from "@angular/forms";
import { EditfournisseurComponent } from './edit/editfournisseur/editfournisseur.component';
import { ProduitComponent } from './produit/produit.component';
import { EditproduitComponent } from './edit/editproduit/editproduit.component';
import { LigneProduitComponent } from './ligne-produit/ligne-produit.component';
import { EditligneProduitComponent } from './edit/editligne-produit/editligne-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent,
    EditfournisseurComponent,
    ProduitComponent,
    EditproduitComponent,
    LigneProduitComponent,
    EditligneProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
