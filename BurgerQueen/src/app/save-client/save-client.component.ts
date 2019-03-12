import { Component, OnInit } from '@angular/core';
import { ServiceFirebaseService } from '../services/service-firebase.service';
import { NgForm } from '@angular/forms';
import { Client } from "../models/Client";

@Component({
  selector: 'app-save-client',
  templateUrl: './save-client.component.html',
  styleUrls: ['./save-client.component.css']
})
export class SaveClientComponent implements OnInit {

  constructor(private clientService : ServiceFirebaseService) { }

  ngOnInit() {
    this.clientService.getClient();
  }
  onSubmit(clientForm: NgForm) {
    this.clientService.insertClient(clientForm.value);
  }

}
