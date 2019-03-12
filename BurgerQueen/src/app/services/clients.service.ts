import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Client } from "../models/Client";

@Injectable()
export class ClientsService {
  clientList: AngularFireList<any>;
  selectedClient: Client = new Client();
  constructor(private firebase: AngularFireDatabase) { }

  getClient() {
    return (this.clientList = this.firebase.list('clients'));
  }
 
  insertClient(client: Client) {
    this.clientList.push({name: client.name});  
  }
  
}

