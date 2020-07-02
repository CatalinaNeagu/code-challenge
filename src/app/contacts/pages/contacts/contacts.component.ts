import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


import { EditContactModalComponent } from '../../modals/edit-contact/edit-contact-modal.component';
import { AddContactModalComponent } from '../../modals/add-contact/add-contact-modal.component';

import { ContactsService } from 'src/app/contacts/services/contacts.service';

import { User } from 'src/app/contacts/interfaces/user';
import { AuthenticationService } from 'src/app/auth/services/auth.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
    public users: User[];
    public bsModalRef: BsModalRef;
    public index: any;
    public user: User;
    public loggedInUser: User;
    constructor(
        private contactsService: ContactsService,
        private modalService: BsModalService,
        private authService: AuthenticationService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.getLoggedInUser();
        this.loadAllUsers();
    }
    public editContact(index: any) {
        this.index = index;
        this.user = { ...this.users[index] };
        const initialState = { user: this.user };
        this.bsModalRef = this.modalService.show(EditContactModalComponent, { initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    }

    public deleteContact(index: any) {
        this.contactsService.delete(index).subscribe(() => console.log('succes'));
    }
    public addContact() {
        const initialState = {};
        this.bsModalRef = this.modalService.show(AddContactModalComponent, { initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
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
