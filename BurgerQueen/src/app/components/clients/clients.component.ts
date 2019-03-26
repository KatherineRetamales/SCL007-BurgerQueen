import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/clients.service'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  item: any = {
    name:""
  }
  item1: any ={
    product:[]
  }
  constructor(private service : ClientsService) { }

  ngOnInit() {
  }
  saveClient(){
    this.service.addItem(this.item);
  }
  addOrder() {
    (this.item1.product).push();
    console.log(this.item1.product);  
  }
  
}
