import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../services/produit-service.service';
import { ItemServiceService } from '../services/item-service.service';
import { Item } from '../Models/item.model';
import { Produit } from '../Models/produit.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-show-facture',
  templateUrl: './show-facture.component.html',
  styleUrls: ['./show-facture.component.css']
})
export class ShowFactureComponent implements OnInit {
  public ppfac:any;

  private  listItems:  Array<Item> = [];
  private  listproduits:  Array<Produit> = [];
  constructor(private _produitService:ProduitServiceService,private _itemService:ItemServiceService) { }
  
  ngOnInit() {
  

  }
  
  public  getItems(){
    produit:Produit;
    this._itemService.getProduitPerFacture(1).subscribe((data:  Array<object>) => {
        this.listproduits  =  data;
      
        console.log(data);

    });
    this.listproduits.forEach(produit=> {
      this.getProduit(produit.IdProduit);
    );
}
public  getProduit(id:number) :Observable<any>{
  return this._produitService.getProduit(id);
}


}
