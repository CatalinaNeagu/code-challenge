import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContactsComponent } from './pages/contacts/contacts.component';
import { EditContactModalComponent } from './modals/edit-contact/edit-contact-modal.component';
import { AddContactModalComponent } from './modals/add-contact/add-contact-modal.component';
import { ModalComponent } from '../shared/modal/modal.component';

import { ContactsService } from './services/contacts.service';

@NgModule({
  imports: [
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
    ModalComponent,
  ],
  providers: [
    ContactsService,
  ],
})

export class ContactsModule {
}
