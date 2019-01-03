import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {


    constructor(public http:HttpClient) {

}
getProduitPerFacture(idFacture:Number){
    return this.http.get("http://localhost:8080/items/facture"+idFacture)


}

   

}
