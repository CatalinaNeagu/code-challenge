import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { UserModel } from '../models/user.model';

import { UserApi } from './user.api';

@Injectable({
    providedIn: 'root',
})

export class AuthenticationService {
    private currentUserSubject = new BehaviorSubject<UserModel>(null);
    constructor(
        private userApi: UserApi) {
    }
    public login$(user: { email: string, password: string }): Observable<any> {
        return this.userApi.login(user).pipe(map((token) => {
            localStorage.setItem('token', token);
            this.currentUserSubject.next(user);
        }));
    }
    public logout(): void {
        localStorage.removeItem('token');
        localStorage.clear();
        this.currentUserSubject.next(null);
    }
    public getCurrentUser(): Observable<UserModel> {
        return this.currentUserSubject.asObservable();
    }
}
