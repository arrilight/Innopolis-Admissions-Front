import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-staff-interviews',
    templateUrl: './staff-interviews.component.html',
    styleUrls: ['./staff-interviews.component.css'],
})
export class StaffInterviewsComponent implements OnInit {
    constructor(private userService: UserService) {
        this.userService
            .getStaffInterviewsList(null)
            .subscribe(
                list => console.warn(list),
                error1 => console.warn(error1)
            );
    }

    ngOnInit() {}
}
