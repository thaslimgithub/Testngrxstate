import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  cardetails = [];

  constructor() {}
    reactiveForm = new FormGroup({
      ownName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]),
      carName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      numPlate: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15),
      ])
    });

  addcardetails() {
    console.log('formvalues', this.reactiveForm.value);
  }
  deleteCardetails() {

  }
  updatecardetails() {

  }
}