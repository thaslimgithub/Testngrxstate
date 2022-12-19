import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { EffectsModule } from '@ngrx/effects';
import { CarEffect } from './shared/car.effect';
import { StoreModule } from '@ngrx/store';
import { appReducer, carReducer } from './shared/car.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([CarEffect]),
    StoreModule.forFeature('mycar', carReducer),
    StoreModule.forRoot({ 'appState': appReducer }),
    
  ],
  declarations: [
    AppComponent,
    CarDetailsComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [HttpClientModule]
})
export class AppModule { }
