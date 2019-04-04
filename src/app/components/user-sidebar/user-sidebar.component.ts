import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { UserProfileInterface } from '../../interfaces/user-profile-interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-sidebar',
    templateUrl: './user-sidebar.component.html',
    styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent implements OnInit {
    @Output() chosen = new EventEmitter<string>();
    @Input() menuList: NbMenuItem[];
    @Input() userInfo: UserProfileInterface;

    constructor(menu: NbMenuService, private router: Router) {
      menu.onItemClick().subscribe(({ item }) => {
            const routes: Record<string, string> = {
                'Profile information': 'profile',
                Tests: 'tests',
                Interviews: 'interviews',
            };
            this.router.navigate([`candidate/${routes[item.title]}`]);
        });
    }

    ngOnInit() {}
}
