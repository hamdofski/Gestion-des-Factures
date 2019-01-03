import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  constructor(public http:HttpClient) {

  }
  getProduit(idProduit:number){
      return this.http.get("http://localhost:8083/produits/"+idProduit)
  
  
  }
}
