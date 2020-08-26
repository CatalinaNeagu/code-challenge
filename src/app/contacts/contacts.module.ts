import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContactsComponent } from './pages/contacts/contacts.component';
import { ManageContactModalComponent } from './modals/manage-contact/manage-contact-modal.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
    ManageContactModalComponent,
    ProfileComponent,
  ],
  entryComponents: [
    ManageContactModalComponent,
],
providers: [
  BsModalRef,
  ContactsService,
],
})

export class ContactsModule {
}
