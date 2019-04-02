import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
    selector: 'app-staff-page',
    templateUrl: './staff-page.component.html',
    styleUrls: ['./staff-page.component.css'],
})
export class StaffPageComponent implements OnInit {
    items = [
        { title: 'Notification 1' },
        { title: 'A looooong text of a notification' },
        { title: 'Notification 2' },
    ];

    menuList: NbMenuItem[] = [
        {
            icon: 'fas fa-users',
            title: '  Interviews',
            link: '',
        },
    ];

    currentSubPage = '  Candidates';
    setSubPage(name: string) {
        this.currentSubPage = name;
    }
    constructor() {}

    ngOnInit() {}
}
