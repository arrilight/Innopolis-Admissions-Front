import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { UserService } from '../../services/user.service';
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
        this.userService
            .getProfileInfo(null)
            .subscribe(
                userInfo =>
                    (this.userInfo = {
                        ...userInfo,
                        progress: 60,
                        photo:
                            'https://ssl.gstatic.com/docs/common/profile/dinosaur_lg.png',
                    })
            );
    }

    setSubPage(name: string) {
        this.currentSubPage = name;
    }
}
