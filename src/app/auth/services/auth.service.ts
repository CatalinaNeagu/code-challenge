import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


import { UserApi } from './user.api';

import { UserCredentialsModel } from 'src/app/shared/interfaces/user.model';

@Injectable({
    providedIn: 'root',
})

export class AuthenticationService {
    private currentUserCredentialsSubject = new BehaviorSubject<UserCredentialsModel>(null);
    constructor(
        private userApi: UserApi) {
    }
    public login$(userCredentials: UserCredentialsModel): Observable<any> {
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
    public getCurrentUserCredentials(): Observable<UserCredentialsModel> {
        return this.currentUserCredentialsSubject.asObservable();
    }
}
