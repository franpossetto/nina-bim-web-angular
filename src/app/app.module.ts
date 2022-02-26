import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { SharedModule } from './shared/shared.moldule';
import { AppRoutingModule } from './app-rounting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
