import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fournisseur} from "../classe/fournisseur";
import {LigneProduit} from "../classe/ligne-produit";

@Injectable({
  providedIn: 'root'
})
export class LigneProduitService {

  ligneProduitUrl: string;
  constructor(private http:HttpClient ) {
    this.ligneProduitUrl = "http://localhost:8088/api/ligneproduit/"
  }
  public findAll(): Observable<LigneProduit[]> {
    return this.http.get<LigneProduit[]>(this.ligneProduitUrl);
  }
  public getLigneProduit(id : number): Observable<any>{
    return this.http.get(`${this.ligneProduitUrl}id/${id}`);
  }

  public save(product: LigneProduit) {
    return this.http.post<Fournisseur>(this.ligneProduitUrl, product);
  }
  update(ligneProduit : LigneProduit) {
    return this.http.put(`${this.ligneProduitUrl}update`, ligneProduit);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.ligneProduitUrl}id/${id}`, { responseType: 'text' });
  }
}
