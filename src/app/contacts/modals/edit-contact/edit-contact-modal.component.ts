import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

import { ContactsService } from '../../services/contacts.service';

import { User } from 'src/app/contacts/interfaces/user';

@Component({
    selector: 'app-edit-contact-modal',
    templateUrl: './edit-contact-modal.component.html',
    styleUrls: ['./edit-contact-modal.component.scss']
})

export class EditContactModalComponent implements OnInit {
    @Input() user: Partial<User>  = {};
    public submitted: boolean;
    public loading: boolean;
    public editContactForm: FormGroup;
    public onClose: Subject<boolean>;
    public index: number;
    public users: User[];
    public parameter: number;

    constructor(
        private bsModalRef: BsModalRef,
        private formBuilder: FormBuilder,
        private contactsService: ContactsService,
    ) {
    }

    ngOnInit(): void {
        this.submitted = false;
        this.loading = false;
        this.initForm();
        this.onClose = new Subject<boolean>();
    }
    get formControls() {
        return this.editContactForm.controls;
    }

    public close() {
        this.bsModalRef.hide();
    }

    public onSubmit() {
        this.submitted = true;
        if (this.editContactForm.invalid) {
            return;
        }
        this.index = this.contactsService.fakeData.findIndex(x => x.id === this.user.id);
        this.editPersonalInformation(this.index, this.editContactForm.value);

    }
    private initForm() {
        this.editContactForm = this.formBuilder.group({
            email: [this.user.email, Validators.required],
            firstName: [this.user.firstName, Validators.required],
            lastName: [this.user.lastName, Validators.required],
            phoneNumber: [this.user.phoneNumber, Validators.required]
        });
    }

    private editPersonalInformation(index, editContactFormValue: User) {
        this.contactsService.update(index, editContactFormValue).subscribe((users) => console.log(users));
        this.bsModalRef.hide();
        this.onClose.next(true);
    }
}
