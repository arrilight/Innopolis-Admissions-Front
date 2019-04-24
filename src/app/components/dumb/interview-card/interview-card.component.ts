import { Component, Input, OnInit } from '@angular/core';
import { UserProfileInterface } from '../../../interfaces/user-profile-interface';
import { InterviewInterface } from '../../../interfaces/interview-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'app-interview-card',
    templateUrl: './interview-card.component.html',
    styleUrls: ['./interview-card.component.css'],
})
export class InterviewCardComponent implements OnInit {
    @Input() interview: InterviewInterface;
    @Input() grade?: (login: string, grade: string) => void;
    public formGroup: FormGroup;
    constructor(
        protected dialogRef: NbDialogRef<InterviewCardComponent>,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.formGroup = new FormGroup({
            grade: new FormControl(''),
        });
    }

    submit() {
        if (this.formGroup.get('grade').value !== '') {
            this.grade('login12', this.formGroup.get('grade').value);
            this.dialogRef.close();
            return;
        }

        console.warn('fill all values');
    }
}
