import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
   list:any=[];
   cost:number;
  constructor(private cart:CartService) { }

  ngOnInit() {
    this.cart.getitemslist().subscribe(res=>{
      this.list=res;
      this.cost=this.cart.total();
    })
  }

}
