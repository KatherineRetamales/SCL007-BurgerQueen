import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/clients.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  items:any;

  constructor(private service: ClientsService) { 
    this.service.listClient().subscribe(item =>{
      this.items= item;
      console.log(item);
      
    });
  }
    
  ngOnInit() {
  }

}
