import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Example01Component } from './example01/example01.component';
import { Example02Component } from './example02/example02.component';
import { Example0Component } from './example0/example0.component';

@NgModule({
  declarations: [
    AppComponent,
    Example01Component,
    Example02Component,
    Example0Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
