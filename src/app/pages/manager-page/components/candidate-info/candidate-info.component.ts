import { Component, Input, OnInit } from '@angular/core';
import { UserProfileInterface } from '../../../../interfaces/user-profile-interface';
import { UserService } from '../../../../services/user/user.service';
import { UserRoles } from '../../../../enums/user-roles.enum';
import { FormControl, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
    selector: 'app-candidate-info',
    templateUrl: './candidate-info.component.html',
    styleUrls: ['./candidate-info.component.css'],
})
export class CandidateInfoComponent implements OnInit {
    @Input()
    candidate: UserProfileInterface;

    public professors: UserProfileInterface[];
    public formGroup: FormGroup;
    public selectedProfessor: UserProfileInterface;

    constructor(private userService: UserService, protected dialogRef: NbDialogRef<CandidateInfoComponent>) {}

    ngOnInit() {
        this.initForm();
        this.loadProfessors();
        this.formGroup.valueChanges.subscribe(console.warn);
    }

    public assignInterview(): void {
        const { professor, date } = this.formGroup.value;
        if (professor && date) {
            this.userService.assignInterview(
                this.candidate.login,
                professor,
                date
            );
        }
        this.dialogRef.close();
    }

    private loadProfessors(): void {
        this.userService
            .getUsers$(UserRoles.STAFF_MEMBER)
            .subscribe(
                (professors: UserProfileInterface[]) =>
                    (this.professors = professors)
            );
    }

    private initForm(): void {
        this.formGroup = new FormGroup({
            professor: new FormControl(''),
            date: new FormControl(''),
        });
    }
}
