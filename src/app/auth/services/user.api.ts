import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { of, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UserCredentials } from 'src/app/auth/interfaces/user-credentials';

@Injectable({
    providedIn: 'root'
})
export class UserApi {

    constructor() {
    }

    login(userCredentials: UserCredentials) {
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
