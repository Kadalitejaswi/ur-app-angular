import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.component.html',
  styleUrls: ['./chocolate.component.css'],
  template:`<h1>hii welcome to {{chocolateShop}}</h1>
  <h3> chocolate {{choco()}}`

  
})
export class ChocolateComponent implements OnInit {
      chocolate:string[]=['dairyMilk'];
      chocolateShop:string='choaolate house'
      choco():string{
        return this.chocolate[0]
      }


  constructor() { }

  ngOnInit() {
  }

}

