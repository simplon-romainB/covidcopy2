import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VaccinationjourComponent } from './vaccinationjour/vaccinationjour.component';
import { VaccinationtotalComponent } from './vaccinationtotal/vaccinationtotal.component';
import { CasjourComponent } from './casjour/casjour.component';
import { CastotalComponent } from './castotal/castotal.component';
import { DeadjourComponent } from './deadjour/deadjour.component';
import { DeadtotalComponent } from './deadtotal/deadtotal.component';
import { HospitalComponent } from './hospital/hospital.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    VaccinationjourComponent,
    VaccinationtotalComponent,
    CasjourComponent,
    CastotalComponent,
    DeadjourComponent,
    DeadtotalComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
