import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { of, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UserCredentialsModel } from 'src/app/shared/interfaces/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserApi {

    constructor() {
    }

    login(userCredentials: UserCredentialsModel) {
        return timer(Math.random() * 1000).pipe(
            switchMap(() => {
                if (userCredentials.email === 'andrei.ionescu@gmail.com' && userCredentials.password === 'secret') {
                    return of('token');
                }
                return throwError(new HttpErrorResponse({status: 401}));
            })
        );
    }
}
