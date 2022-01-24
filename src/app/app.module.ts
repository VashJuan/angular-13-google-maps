import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [BrowserModule, FormsModule, GoogleMapsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
