import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.css'],
  template:`<h1> Welcome To {{iceCreamShop}}</h1>
           <h3>You ordered : {{makeIceCream()}}</h3>`
})
export class IceCreamComponent{
  icecream:string[]=['Butterscotch','Venila','Chocolate'];
  iceCreamshop:string='Cream Stone';

makeIceCream():string{
  return this.icecream[0];


}
}
