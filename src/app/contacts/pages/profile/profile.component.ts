import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    constructor(
        private router: Router,
    ) { }

    public goToExperiencePage() {
        this.router.navigateByUrl('/experience');
    }
}