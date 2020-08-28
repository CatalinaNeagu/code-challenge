import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExperienceComponent } from './pages/experience/experience.component';

const routes: Routes = [{
  path: '',
  component: ContactsComponent
},
  {
  path: 'profile',
  component: ProfileComponent
},
{
  path: 'experience',
  component: ExperienceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
