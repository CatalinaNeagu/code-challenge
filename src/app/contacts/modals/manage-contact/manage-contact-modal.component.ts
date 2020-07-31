import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

import { ContactsService } from '../../services/contacts.service';

import { User } from 'src/app/contacts/interfaces/user';

@Component({
    selector: 'app-manage-contact-modal',
    templateUrl: './manage-contact-modal.component.html',
    styleUrls: ['./manage-contact-modal.component.scss']
})

export class ManageContactModalComponent implements OnInit {
    public submitted: boolean;
    public loading: boolean;
    public manageContactForm: FormGroup;
    public onClose: Subject<boolean>;
    public user: User;
    public parameter: number;
    public index: any;
    constructor(
        private bsModalRef: BsModalRef,
        private formBuilder: FormBuilder,
        private contactsService: ContactsService,
    ) {
    }

    public ngOnInit(): void {
        this.submitted = false;
        this.loading = false;
        this.initForm();
        this.onClose = new Subject<boolean>();
    }
    get formControls() {
        return this.manageContactForm.controls;
    }

    public close() {
        this.bsModalRef.hide();
    }
    public onSubmit() {
        this.submitted = true;
        if (this.manageContactForm.invalid) {
            return;
        }
        if (this.user.id) {
            this.index = this.contactsService.fakeData.findIndex(x => x.id === this.user.id);
            this.editPersonalInformation(this.index, this.manageContactForm.value);
        }
        else {
            this.addNewContact(this.manageContactForm.value);
        }
        this.bsModalRef.hide();
        this.onClose.next(true);
    }

    private initForm() {
        this.manageContactForm = this.formBuilder.group({
            email: [this.user.email, Validators.required],
            firstName: [this.user.firstName, Validators.required],
            lastName: [this.user.lastName, Validators.required],
            phoneNumber: [this.user.phoneNumber, Validators.required],
            id: [this.user.id],
        });
    }
    private addNewContact(manageContactFormValue: User) {
        this.contactsService.add(manageContactFormValue).subscribe((users) => console.log(users));
    }
    private editPersonalInformation(index, manageContactFormValue: User) {
        this.contactsService.update(index, manageContactFormValue).subscribe((users) => console.log(users));
    }
}
