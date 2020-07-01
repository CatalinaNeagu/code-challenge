import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { of, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserApi {

    constructor() {
    }

    login(user: {email: string, password: string}) {
        return timer(Math.random() * 1000).pipe(
            switchMap(() => {
                if (user.email === 'andrei.ionescu@gmail.com' && user.password === 'secret') {
                    return of('token');
                }
                return throwError(new HttpErrorResponse({status: 401}));
            })
        );
    }
}
