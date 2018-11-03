import {Component} from '@angular/core'

@Component({
    selector:'app-burger',
    template:`<h1>Welcome to {{burgerShop}}</h1>
    <h4>We Serve Latest Burger in the World </h4>`
})
export class BurgerComponent {
    burger:string[]=['Cheese burger','Butter Pizzburgera','Chilly burger'];
    burgerShop:string='Burger King';
    makeBurger():string{
        return this.burger[0];
    }
}