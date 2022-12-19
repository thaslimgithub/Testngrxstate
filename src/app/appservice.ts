import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cardetails } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

getcarDetails() {
    return this.http.get<cardetails>('http://localhost:3000/car-details');
  }

create(payload: cardetails) {
  return this.http.post<cardetails>('http://localhost:3000/car-details', payload);
}

delete(id: number) {
  return this.http.delete(`http://localhost:3000/car-details/${id}`);
}
}