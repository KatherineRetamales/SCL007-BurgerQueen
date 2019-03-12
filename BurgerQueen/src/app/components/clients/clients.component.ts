import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/clients.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService : ClientsService) { }

  ngOnInit() {
  }
  onSubmit(clientForm: NgForm) {
    this.clientService.insertClient(clientForm.value);
  }
}
