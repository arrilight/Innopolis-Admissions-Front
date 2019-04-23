import { Component, Input, OnInit } from '@angular/core';
import { UserProfileInterface } from '../../../interfaces/user-profile-interface';
import { InterviewInterface } from '../../../interfaces/interview-interface';

@Component({
    selector: 'app-interview-card',
    templateUrl: './interview-card.component.html',
    styleUrls: ['./interview-card.component.css'],
})
export class InterviewCardComponent implements OnInit {
    @Input() interview: InterviewInterface;
    constructor() {}

    ngOnInit() {}
}
