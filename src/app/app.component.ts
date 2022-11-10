import { Component } from '@angular/core';
import { MenuItems } from 'src/MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';

  items : MenuItems[] = [{name:"Pepperoni Pizza", category:"pizza", price: 18}, 
                        {name: "Veggie Pizza", category: "pizza", price: 16}, 
                        {name: "Mango Habanero Wings", category: "wings", price: 13},
                        {name: "Buffalo Wings", category: "wings", price: 12},
                        {name: "Jalapeno Poppers", category: "appetizer", price: 6},
                        {name: "Mozzarella Sticks", category: "appetizer", price: 4}
];
}
