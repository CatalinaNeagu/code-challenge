import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ContactsModule } from './contacts/contacts.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactsModule,
    AuthModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
