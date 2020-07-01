import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

import { EditContactModalComponent } from './modals/edit-contact/edit-contact-modal.component';
import { AddContactModalComponent } from './modals/add-contact/add-contact-modal.component';

import { ContactsService } from './services/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactsComponent,
    EditContactModalComponent,
    AddContactModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    MatIconModule,

  ],
  providers: [
    BsModalRef,
    ContactsService,
  ],
  entryComponents: [
    EditContactModalComponent,
    AddContactModalComponent,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
