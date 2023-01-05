import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { menu } from '../home/menuproperties';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.page.html',
  styleUrls: ['./menuitem.page.scss'],
})
export class MenuitemPage implements OnInit {
  itemdetails:menu;
  constructor(private ACTroute:ActivatedRoute,
    private router:Router,
    private menuservice:MenuService) { }

  ngOnInit() {
    this.ACTroute.paramMap.subscribe(map=>{
      if(!map.has('itemid')){
        this.router.navigate(['/home'])
      }
      const itemid=map.get('itemid');
      this.itemdetails=this.menuservice.getitem(itemid);

    })
  }

}
