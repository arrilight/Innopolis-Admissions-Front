import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { UserService } from '../../services/user/user.service';
import { UserProfileInterface } from '../../interfaces/user-profile-interface';

@Component({
    selector: 'app-candidate-page',
    templateUrl: './candidate-page.component.html',
    styleUrls: ['./candidate-page.component.css'],
})
export class CandidatePageComponent implements OnInit {
    items = [
        { title: 'Notification 1' },
        { title: 'A looooong text of a notification' },
        { title: 'Notification 2' },
    ];

    menuList: NbMenuItem[] = [
        {
            icon: 'fas fa-file-invoice',
            title: 'Profile information',
            link: '',
        },
        {
            icon: 'fas far fa-edit',
            title: 'Tests',
            link: '',
        },
        {
            icon: 'fas fa-user',
            title: 'Interviews',
            link: '',
        },
    ];

    currentSubPage = 'Profile information';

    userInfo: UserProfileInterface;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getProfileInfo(null).subscribe(
            userInfo =>
                (this.userInfo = {
                    ...userInfo,
                    photo:
                        'https://images-gmi-pmc.edge-generalmills.com/9dd2e32b-613d-4515-9597-39ba6ad86b8b.jpg',
                })
        );
    }

    setSubPage(name: string) {
        this.currentSubPage = name;
    }
}
