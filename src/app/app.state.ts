import { cardetails } from './app.model';

export interface AppState {
  newcar: cardetails;
}

export interface Appstate {
  apiStatus: string;
  apiResponseMessage: string;
}