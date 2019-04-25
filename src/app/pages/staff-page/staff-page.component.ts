import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbMenuItem } from '@nebular/theme';
import { UserService } from '../../services/user/user.service';
import { UserProfileInterface } from '../../interfaces/user-profile-interface';
import { InterviewCardComponent } from '../../components/dumb/interview-card/interview-card.component';

@Component({
    selector: 'app-staff-page',
    templateUrl: './staff-page.component.html',
    styleUrls: ['./staff-page.component.css'],
})
export class StaffPageComponent implements OnInit {
    userInfo: UserProfileInterface;
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
}
