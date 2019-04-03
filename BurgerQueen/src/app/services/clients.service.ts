import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item {name:string, products:string}

@Injectable({providedIn:'root'})
export class ClientsService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private firebase: AngularFirestore) { 
    this.itemsCollection = firebase.collection<Item>('clients');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listClient() {
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

}

