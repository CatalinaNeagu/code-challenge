import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


import { UserApi } from './user.api';

import { UserCredentials } from 'src/app/auth/interfaces/user-credentials';

@Injectable({
    providedIn: 'root',
})

export class AuthenticationService {
    private currentUserCredentialsSubject = new BehaviorSubject<UserCredentials>(null);
    constructor(
        private userApi: UserApi) {
    }
    public login$(userCredentials: UserCredentials): Observable<any> {
        console.log(userCredentials, 'user');
        return this.userApi.login(userCredentials).pipe(map((token) => {
            localStorage.setItem('token', token);
            this.currentUserCredentialsSubject.next(userCredentials);
        }));
    }
    public logout(): void {
        localStorage.removeItem('token');
        localStorage.clear();
        this.currentUserCredentialsSubject.next(null);
    }
    public getCurrentUserCredentials(): Observable<UserCredentials> {
        return this.currentUserCredentialsSubject.asObservable();
    }
}
