import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

import { UserModel } from '../../models/user.model';

import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'app-add-contact-modal',
    templateUrl: './add-contact-modal.component.html',
    styleUrls: ['./add-contact-modal.component.scss']
})

export class AddContactModalComponent implements OnInit {
    public submitted: boolean;
    public loading: boolean;
    public addContactForm: FormGroup;
    public onClose: Subject<boolean>;
    public user: UserModel;
    public parameter: number;
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
    get formControl() {
        return this.addContactForm.controls;
    }

    public close() {
        this.bsModalRef.hide();
    }
    public onSubmit() {
        this.submitted = true;
        if (this.addContactForm.invalid) {
            return;
        }
        this.addNewContact(this.addContactForm.value);
    }

    private addNewContact(addContactFormValue: UserModel) {
        this.contactsService.add(addContactFormValue).subscribe((users) => console.log(users));
        this.bsModalRef.hide();
        this.onClose.next(true);
    }
    private initForm() {
        this.addContactForm = this.formBuilder.group({
            email: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phoneNumber: ['', Validators.required]
        });
    }
}
