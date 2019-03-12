import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';


import {ServiceFirebaseService} from './services/service-firebase.service';
import {ClientsService} from './services/clients.service';

import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ProductsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    ClientsService,
    ServiceFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
