import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { ShowOrderComponent } from './show-order/show-order.component';
import { ShowMenuComponent } from './show-menu/show-menu.component';
import { SaveClientComponent } from './save-client/save-client.component';

import {ServiceFirebaseService} from './services/service-firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowOrderComponent,
    ShowMenuComponent,
    SaveClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [ServiceFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
