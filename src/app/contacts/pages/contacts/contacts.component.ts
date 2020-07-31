import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


import { ManageContactModalComponent } from '../../modals/manage-contact/manage-contact-modal.component';
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
    public manageContact(index?) {
        let initialState = {};
        if (index >= 0) {
            this.index = index;
            this.user = { ...this.users[index] };
            initialState = { user: this.user };
        }
        else {
            initialState = { user: {} };
        }
        this.bsModalRef = this.modalService.show(ManageContactModalComponent, { initialState });
        this.bsModalRef.content.onClose.subscribe(data =>
            {this.user = {...this.user, ...data};
        });
        this.bsModalRef.content.closeBtnName = 'Close';
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
