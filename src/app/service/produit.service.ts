import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../classe/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produitUrl:string;
  constructor(private http:HttpClient) {
    this.produitUrl = "http://localhost:8088/api/produit/"
  }

  public findAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.produitUrl);
  }
  public getProduit(id : number): Observable<any>{
    return this.http.get(`${this.produitUrl}id/${id}`);
  }

  public save(product: Produit) {
    return this.http.post<Produit>(this.produitUrl, product);
  }
  update(product: Produit) {
    return this.http.put(`${this.produitUrl}update`, product);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.produitUrl}id/${id}`, { responseType: 'text' });
  }
}
