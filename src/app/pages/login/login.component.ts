import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public submitted: boolean;
    public loading: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthenticationService,
    ) {
    }

    public ngOnInit() {
        this.submitted = false;
        this.loading = false;
        this.initForm();
    }
    get formControl() {
        return this.loginForm.controls;
    }
    private initForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    public onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.login({ ...this.loginForm.value });

    }

    private login(loginFormValue) {
        this.authService.login$(loginFormValue)
            .pipe(catchError((error: HttpErrorResponse) => {
                this.loginForm.setErrors({
                    invalid_credentials: true,
                });
                this.loading = false;
                return throwError(error);

            }))
            .subscribe(() => this.router.navigateByUrl('/contacts'));
    }
}
