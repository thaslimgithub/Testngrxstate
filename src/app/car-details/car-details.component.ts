import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Appstate, AppState } from '../app.state';
import { cardetails } from '../app.model';
import { invokeCarAPI, invokeDeleteCarAPI, invokeSaveNewCarAPI, setAPIStatus } from '../shared/car.action';
import { selectAppState, selectCar } from '../shared/car.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit{

  getcardetails: Observable<cardetails[]>;

  constructor(private store: Store,
    private appStore: Store<Appstate>,
    private router: Router) {

    this.getcardetails = this.store.pipe(select(selectCar));
    
   }
  ngOnInit(): void {
    this.store.dispatch(invokeCarAPI());
  }

    carForm: cardetails = {
      ownName: '',
      carName: '',
      numPlate: ''
    };
    idToDelete: number = 0;

  addcardetails() {
    let i=0;
      this.store.dispatch(invokeSaveNewCarAPI({ newCar: this.carForm }));
      let apiStatus$ = this.appStore.pipe(select(selectAppState));
      apiStatus$.subscribe((apState) => {
        if (apState.apiStatus == 'success') {
          this.appStore.dispatch(
            setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
          );
           this.router.navigate(['/']);
        }
      });
      this.idToDelete = i+1;

    }

    delete(id: number) {
      this.idToDelete = id;
      this.store.dispatch(
        invokeDeleteCarAPI({
          id: this.idToDelete,
        })
      );
      let apiStatus$ = this.appStore.pipe(select(selectAppState));
      apiStatus$.subscribe((apState) => {
        if (apState.apiStatus == 'success') {
          this.appStore.dispatch(
            setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
          );
        }
      });
    }
  }