import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

import {CoreModule, ButtonModule, InputModule} from 'truly-ui';  // CoreModule

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule ,

    CoreModule.forRoot({theme: 'default'}) ,  // configurations
      InputModule,
    ButtonModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
