import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Product } from '../models/product';
import { Client } from "../models/Client";


@Injectable()
export class ServiceFirebaseService {

  productList: AngularFireList<any>;
 
  selectedProduct: Product = new Product();


  constructor(private firebase: AngularFireDatabase) {}
  getProduct() {
    return (this.productList = this.firebase.list('product'));
  }

  getClient() {
    return (this.productList = this.firebase.list('clients'));
  }

  insertProduct(product: Product) {
    this.productList.push({name: product.name, price: product.price});
  }

  insertClient(client: Client) {
    this.productList.push({name: client.name});
  }

  updateProduct(product: Product) {
    this.productList.update(product.$key, {
      name: product.name,
      price: product.price
    });
  }

  deleteProduct($key: string) {
    this.productList.remove($key);
  }
}
