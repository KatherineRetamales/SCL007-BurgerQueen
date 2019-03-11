import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})
export class ShowMenuComponent implements OnInit {
  breakfastMenu:Array<any> = [
    {name:'Cafe con leche',sale: 700},
    {name:'Cafe americano',sale: 500},
    {name:'Jugo natural',sale: 700},
    {name:'Sandwich de jamon y queso',sale: 1000}
  ]
  constructor() { 
    
  }

  ngOnInit() {
  }

}
