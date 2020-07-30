import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { ModalOptions } from 'ngx-bootstrap/modal';

import { EditContactModalComponent } from '../../modals/edit-contact/edit-contact-modal.component';
import { AddContactModalComponent } from '../../modals/add-contact/add-contact-modal.component';

import { User } from 'src/app/contacts/interfaces/user';

import { AuthenticationService } from 'src/app/auth/services/auth.service';
import { ModalService } from 'src/app/shared/services/shared-modal.service';
import { ContactsService } from 'src/app/contacts/services/contacts.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
    @Input() user: User;
    public users: User[];
    public index: any;
    public loggedInUser: User;
    constructor(
        private contactsService: ContactsService,
        private authService: AuthenticationService,
        private router: Router,
        private sharedModalService: ModalService,
        private viewContainerRef: ViewContainerRef
    ) {
    }

    ngOnInit() {
        this.getLoggedInUser();
        this.loadAllUsers();
    }
    public editContact(index: any) {
        this.index = index;
        this.user = { ...this.users[index] };
        const config: Partial<ModalOptions> = {
            initialState: {
                user: this.user
            }
        };
        this.sharedModalService.createModal(
            'sample-modal',
            'Edit contact',
            this.viewContainerRef,
            EditContactModalComponent, config).content.onClose.subscribe(data => {
                this.user = data;
            });
    }

    public addContact() {
        const config: Partial<ModalOptions> = {
            initialState: {
            }
        };
        this.sharedModalService.createModal(
            'sample-modal',
            'Add contact',
            this.viewContainerRef,
            AddContactModalComponent, config).content.onClose.subscribe(data => this.user = data);
    }

    public deleteContact(index: any) {
        this.contactsService.delete(index).subscribe(() => console.log('succes'));
    }

    public logout() {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    }

    private loadAllUsers() {
        this.contactsService.getAll().subscribe(users => {
            this.users = users;
        });
    }
    private getLoggedInUser() {
        this.authService.getCurrentUserCredentials().subscribe((user) => {
            if (user) {
                this.loggedInUser = this.contactsService.fakeData.find(x => x.email === user.email && x.password === user.password);
            }
        });
        return this.loggedInUser;
    }
}

