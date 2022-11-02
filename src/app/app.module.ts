import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { Component } from '@angular/core';
 import {  MatButtonModule} from '@angular/material/button';
import {MatCardModule}  from '@angular/material/card'
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
    ReactiveFormsModule,
     MatButtonModule,
      MatCardModule,
      MatTableModule,
      MatFormFieldModule,
      MatIconModule
      
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
