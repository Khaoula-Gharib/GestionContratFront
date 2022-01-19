import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../classe/fournisseur";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  fournisseurUrl: string;
  constructor(private http:HttpClient ) {
    this.fournisseurUrl = "http://localhost:8088/api/fournisseur/"
  }
  public findAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.fournisseurUrl);
  }
  public getFournisseur(id : number): Observable<any>{
    return this.http.get(`${this.fournisseurUrl}id/${id}`);
  }

  public save(product: Fournisseur) {
    return this.http.post<Fournisseur>(this.fournisseurUrl, product);
  }
  update(fournisseur : Fournisseur) {
    return this.http.put(`${this.fournisseurUrl}update`, fournisseur);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.fournisseurUrl}id/${id}`, { responseType: 'text' });
  }
}
