import { BrowserModule} from '@angular/platform-browser';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CommonModule} from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ClientsService} from './services/clients.service';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ClientsService],
      imports: [
        CommonModule,
        FormsModule,
        RouterTestingModule,
        BrowserModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Burger Queen'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Burger Queen');
  });
});
