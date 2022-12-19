import { Component, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from './appservice';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'CRUD NGRX state management';
  showAddBtn: boolean = false;

  constructor(public router: Router, public appservice: AppService) {}

  addcardetails() {
    !this.showAddBtn ? this.showAddBtn = true : this.showAddBtn = false;
  }

  viewAll() {
    this.appservice.getcarDetails();
  }
}
