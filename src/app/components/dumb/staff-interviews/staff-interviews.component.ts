import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { InterviewInterface } from '../../../interfaces/interview-interface';
import { NbDialogService } from '@nebular/theme';
import { InterviewCardComponent } from '../interview-card/interview-card.component';
import { UserProfileInterface } from '../../../interfaces/user-profile-interface';

@Component({
    selector: 'app-staff-interviews',
    templateUrl: './staff-interviews.component.html',
    styleUrls: ['./staff-interviews.component.css'],
})
export class StaffInterviewsComponent implements OnInit {
    public interviews: InterviewInterface[];
    constructor(
        private userService: UserService,
        private dialogService: NbDialogService
    ) {}

    ngOnInit() {
        this.userService.getStaffInterviewsList(null).subscribe(
            // list => (this.interviews = list),
            list => (this.interviews = list),
            error1 => console.warn(error1)
        );
    }

    openCard(interview: InterviewInterface) {
        this.dialogService.open(InterviewCardComponent, {
            hasScroll: true,
            context: {
                interview,
            },
        });
    }
}
