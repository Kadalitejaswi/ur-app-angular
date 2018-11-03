import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../sevices/pizza.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  app:string= 'Learning Angular';
  email:string='john@gmail.com';
  pizza= new PizzaService;
  data1:string='Hello ...!'
  
  data=[]
  constructor(public PizzaSrv:PizzaService) {
    this.data=PizzaSrv.getPizza()
   }

  ngOnInit() {
  }
  showApp(){
    return this.app
  }
  getData(data){
     console.log(data.value);
     
  }
  changeUsername($event){
    console.log($event);
    console.log($event.target.value);
    this.email=$event.target.value

    
  }

changeData(value){
  this.data1=value;
  console.log(this.data1);
  
}

}