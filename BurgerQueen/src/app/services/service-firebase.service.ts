import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Product } from '../models/product';


@Injectable()
export class ServiceFirebaseService {

  productList: AngularFireList<any>;
  selectProduct: Product = new Product();
  constructor(private firebase: AngularFireDatabase) {}
  getProduct() {
    return (this.productList = this.firebase.list('products'));
  }

  insertProduct(product: Product) {
    this.productList.push({name: product.name, price: product.price});
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
