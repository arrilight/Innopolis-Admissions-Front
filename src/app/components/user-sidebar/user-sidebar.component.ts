import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { UserProfileInterface } from '../../interfaces/user-profile-interface';

@Component({
    selector: 'app-user-sidebar',
    templateUrl: './user-sidebar.component.html',
    styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent implements OnInit {
    public userInfo: UserProfileInterface;

    @Output() chosen = new EventEmitter<string>();
    @Input() menuList: NbMenuItem[];

    constructor(menu: NbMenuService) {
        this.userInfo = {
            name: 'John',
            surname: 'Doe',
            role: 'candidate',
            photo:
                'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcsPuSpazhAhWPuIsKHdPzDS8QjRx6BAgBEAU&url=https%3A%2F%2Funsplash.com%2Fsearch%2Fphotos%2Fprofile&psig=AOvVaw1ncLWfBOD0JHiOtYkwCvRs&ust=1554118616819258',
            status: 'Application received',
            progress: 40,
        };

        menu.onItemClick().subscribe(({ item }) => {
            this.chosen.emit(item.title);
        });
    }

    ngOnInit() {}
}
