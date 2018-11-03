import {Component} from '@angular/core'

@Component({
    selector:'app-pizza',
    template:`<h1>Welcome to {{pizzaShop}}</h1>
    <h4>We Serve Latest Pizza in the World </h4>
    <h6>First Pizza {{makePizza()}}</h6>`,
    styles:['h1 {color:red}']
})
export class PizzaComponent {
    pizza:string[]=['Cheese Pizza','Butter Pizza','Chilly Pizza'];
    pizzaShop:string='Pizza Hut';
    makePizza():string{
        return this.pizza[0];
    }
}