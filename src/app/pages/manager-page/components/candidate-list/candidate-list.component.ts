import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import { UserProfileInterface } from '../../../../interfaces/user-profile-interface';
import { BehaviorSubject } from 'rxjs';
import { UserRoles } from '../../../../enums/user-roles.enum';

@Component({
    selector: 'app-candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent implements OnInit {
    public candidates: UserProfileInterface[] = [];
    public isLoading$ = new BehaviorSubject<boolean>(true);
    public selectedStatus: string;
    public anyStatus = 'Any';
    public availableStatuses: string[] = [
        this.anyStatus,
        'Registered',
        'Passed_tests',
        'Graded',
    ];

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.updateCandidates();
    }

    public filterResults(newStatus: string): void {
        this.selectedStatus = newStatus;

        if (newStatus === this.anyStatus.toLowerCase()) {
            this.updateCandidates();
            return;
        }

        this.updateCandidates(newStatus.toUpperCase());
    }

    public updateCandidates(status?: string): void {
        this.userService
            .getUsers$(UserRoles.CANDIDATE, status)
            .subscribe((candidates: UserProfileInterface[]) => {
                this.candidates = candidates;
                this.isLoading$.next(false);
            });
    }
}
