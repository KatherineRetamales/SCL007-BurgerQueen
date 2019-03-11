import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowOrderComponent } from './show-order/show-order.component';
import { ShowMenuComponent } from './show-menu/show-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowOrderComponent,
    ShowMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
