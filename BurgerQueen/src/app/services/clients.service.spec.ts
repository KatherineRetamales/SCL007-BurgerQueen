import { TestBed } from '@angular/core/testing';

import { ClientsService } from './clients.service';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ClientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[FormsModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule],
      declarations: [  ],
      providers: [ClientsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }));

  it('should be created', () => {
    const service: ClientsService = TestBed.get(ClientsService);
    expect(service).toBeTruthy();
  });
});
