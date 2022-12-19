import { createFeatureSelector } from '@ngrx/store';
import { cardetails } from '../app.model';
import { Appstate } from '../app.state';
 
export const selectCar = createFeatureSelector<cardetails[]>('mycar');

export const selectAppState = createFeatureSelector<Appstate>('appState');