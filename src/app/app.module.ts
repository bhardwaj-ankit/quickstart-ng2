import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { RoutingComponents } from './app-routing.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule,FormsModule],
  declarations: [ AppComponent, RoutingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
