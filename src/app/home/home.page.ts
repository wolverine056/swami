import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MenuService } from '../menu.service';
import { menu } from './menuproperties';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  menuarray:menu[];
  constructor(private menuservices:MenuService,
    private cart:CartService) {}

  ngOnInit(): void {
    this.menuarray=this.menuservices.getmenu();

  }
  addToCart(product:any){
    console.log(product);
    this.cart.addtocart(product);
  }


}
