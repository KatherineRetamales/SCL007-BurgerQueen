import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})
export class ShowMenuComponent implements OnInit {
  breakfastMenu:Array<any> = [
    {name:'Cafe con leche',price: 700},
    {name:'Cafe americano',price: 500},
    {name:'Jugo natural',price: 700},
    {name:'Sandwich de jamon y queso',price: 1000}
  ]
  constructor() { 
    
  }

  ngOnInit() {
  }

}
