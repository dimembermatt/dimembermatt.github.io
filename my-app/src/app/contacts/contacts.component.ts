import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css', '../app.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
