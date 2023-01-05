import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { menu } from './home/menuproperties';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menulist:menu[]=[
  {
    id:'1',
    title:'Egg Fry',
    description:'bolied eggs with proteins',
    imgurl:'https://www.sidechef.com/recipe/20cf1ab8-80e5-4378-896d-89147b81820f.jpg',
    cost:200.50
  },
  {
    id:'2',
    title:'Fish Fry',
    description:'delicious goldfish with deepfry',
    imgurl:'http://yummyrecipes.oneshot.in/wp-content/uploads/2016/10/Fish-Fry.jpg',
    cost:500.85
  }

  ]
  constructo() { }

  getmenu(){
    return [...this.menulist]
  }

  getitem(id:string){
    return{...this.menulist.find(list=>{
      return(list.id==id)
    })}
  }


}
