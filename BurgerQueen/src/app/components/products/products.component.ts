import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/clients.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  breakfastMenu : Array<any> =[
    { order: 'Cafe con leche', price: 700 },
    { order: 'Cafe americano', price: 500 },
    { order: 'Jugo natural', price: 700 },
    { order: 'Sandwich de jamon y queso', price: 1000 }
  ];
  lunchMenu :Array<any> = [
    { order: 'Hamburgueza simple', price: 1500 },
    { order: 'Hamburgueza doble', price: 2500 },
    { order: 'Papas fritas', price: 500 },
    { order: 'Onion rings', price: 500 },
    { order: 'Agua 500ml', price: 500 },
    { order: 'Agua 750ml', price: 750 },
    { order: 'Gaseosa 500ml', price: 700 },
    { order: 'Gaseosa 750ml', price: 1000 },
  ];
 show:any;
  item: any = {
 
  }

  items: any =[ {
    order:'',
    price:''
  }]

  total:number;
  total1: number;

  constructor(private service:ClientsService) { }

  ngOnInit() {
   

  }

  add() {
    this.service.addItem(this.item);
   //console.log('orders:',this.item);
    
  }
  array(products: any) {
    this.items.push(products);
    this.total = this.items.reduce((acc,obj,) => acc +(obj.price),0);
    console.log(this.items);  
  }

/*   array1(products: any) {
    this.item.push(products);
    this.total = this.items.reduce((acc,obj,) => acc +(obj.price),0);
    //console.log(this.item);
  } */

  delete(i):void{
    /* let answer = confirm('Seguro que quiere eliminar el producto');
    if(answer){ */
      this.items.splice(i,1)
   /*  } */
  }


  
  
}
