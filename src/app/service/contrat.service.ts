import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../classe/produit";
import {Contrat} from "../classe/contrat";

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  contratUrl:string;
  constructor(private http:HttpClient) {
    this.contratUrl = "http://localhost:8088/api/contrat/"
  }

  public findAll(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(this.contratUrl);
  }
  public getContrat(id : number): Observable<any>{
    return this.http.get(`${this.contratUrl}id/${id}`);
  }

  public save(contrat: Contrat) {
    return this.http.post<Contrat>(this.contratUrl, contrat);
  }
  update(contrat: Contrat) {
    return this.http.put(`${this.contratUrl}update`, contrat);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.contratUrl}id/${id}`, { responseType: 'text' });
  }
}
