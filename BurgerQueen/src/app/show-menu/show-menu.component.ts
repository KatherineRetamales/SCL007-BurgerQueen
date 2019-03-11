import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})
export class ShowMenuComponent implements OnInit {
  breakfastMenu: Array<any> = [
    { name: 'Cafe con leche', price: 700 },
    { name: 'Cafe americano', price: 500 },
    { name: 'Jugo natural', price: 700 },
    { name: 'Sandwich de jamon y queso', price: 1000 }
  ];
  lunchMenu: Array<any> = [
    { name: 'Hamburgueza simple', price: 1500 },
    { name: 'Hamburgueza doble', price: 2500 },
    { name: 'Papas fritas', price: 500 },
    { name: 'Onion rings', price: 500 },
    { name: 'Agua 500ml', price: 500 },
    { name: 'Agua 750ml', price: 750 },
    { name: 'Gaseosa 500ml', price: 700 },
    { name: 'Gaseosa 750ml', price: 1000 },
  ];
  constructor() {}

  ngOnInit() {}
}
