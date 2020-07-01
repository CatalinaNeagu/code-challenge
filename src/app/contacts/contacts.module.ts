import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContactsComponent } from './pages/contacts/contacts.component';
import { EditContactModalComponent } from './modals/edit-contact/edit-contact-modal.component';
import { AddContactModalComponent } from './modals/add-contact/add-contact-modal.component';

import { ContactsService } from './services/contacts.service';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    SharedModule,
    ContactsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
  ],
  declarations: [
    ContactsComponent,
    EditContactModalComponent,
    AddContactModalComponent,
  ],
  entryComponents: [
    EditContactModalComponent,
    AddContactModalComponent,
],
providers: [
  BsModalRef,
  ContactsService,
],
})

export class ContactsModule {
}
