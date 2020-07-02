import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from '../interfaces/user';


@Injectable()
export class ContactsService {

    constructor() { }

    // TODO: don't show the password + create option to modify password

    fakeData: User[] = [
        { id: 1, firstName: 'Ionescu', lastName: 'Andrei', email: 'andrei.ionescu@gmail.com',
        password: 'secret', phoneNumber: '0744898587' },
        { id: 2, firstName: 'Popescu', lastName: 'Ana', email: 'ana.popescu@gmail.com', password: 'secret', phoneNumber: '0744898789' },
        { id: 3, firstName: 'Ion', lastName: 'Vlad', email: 'vlad.ion@gmail.com', password: 'secret', phoneNumber: '0744343434' }
    ];


    public getAll(): Observable<User[]> {
        return of<User[]>(this.fakeData);
    }

    public delete(index: number): Observable<User[]> {
        return of<User[]>(this.fakeData.splice(index, 1));
    }

    public add(user: User): Observable<User[]> {
        this.fakeData.push(user);
        return of<User[]>(this.fakeData);
    }

    public update(index: number, user: User): Observable<User[]> {
        this.fakeData.splice(index, 1, user);
        return of<User[]>(this.fakeData);
    }
}
