import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContactsComponent } from './pages/contacts/contacts.component';
import { ManageContactModalComponent } from './modals/manage-contact/manage-contact-modal.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExperienceComponent } from './pages/experience/experience.component';

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
    BsDropdownModule,
  ],
  declarations: [
    ContactsComponent,
    ManageContactModalComponent,
    ProfileComponent,
    ExperienceComponent,
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
