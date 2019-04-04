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
        // this.userInfo = {
        //     name: 'John',
        //     surname: 'Doe',
        //     role: 'candidate',
        //     photo:
        //         'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcsPuSpazhAhWPuIsKHdPzDS8QjRx6BAgBEAU&url=https%3A%2F%2Funsplash.com%2Fsearch%2Fphotos%2Fprofile&psig=AOvVaw1ncLWfBOD0JHiOtYkwCvRs&ust=1554118616819258',
        //     status: 'Application received',
        //     progress: 40,
        // };

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
