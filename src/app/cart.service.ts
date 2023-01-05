import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemlist:any=[];
  private cartlist=new BehaviorSubject<any>([]);
  constructor() { }

  getitemslist(){
    return this.cartlist.asObservable();
  }
  addtocart(item:any){
    this.itemlist.push(item);
    this.cartlist.next(this.itemlist)
    this.total();
  }
  total():number{
    let totalcost=0;
    this.itemlist.map((m:any)=>{
      totalcost +=m.cost
    })
    return totalcost;
  }
}
