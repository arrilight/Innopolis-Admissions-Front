import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { UserProfileInterface } from '../../../interfaces/user-profile-interface';
import { UserProfileDetailsInterface } from '../../../interfaces/user-profile-details-interface';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-documents-component',
    templateUrl: './documents-component.component.html',
    styleUrls: ['./documents-component.component.css'],
})
export class DocumentsComponentComponent implements OnInit {
    public formGroup: FormGroup;

    private getInfoInterface(): UserProfileInterface {
        return {
            name: this.formGroup.get('name').value,
            surname: this.formGroup.get('surname').value,
        };
    }

    private getDetailsInterface(): UserProfileDetailsInterface {
        return {
            telephone: this.formGroup.get('tel').value,
            email: this.formGroup.get('email').value,
            program: this.formGroup.get('program').value,
            country: this.formGroup.get('country').value,
            skype: this.formGroup.get('skype').value,
        };
    }

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.formGroup = new FormGroup({
            name: new FormControl(''),
            surname: new FormControl(''),
            email: new FormControl(''),
            tel: new FormControl(''),
            program: new FormControl(''),
            country: new FormControl(''),
        });

        forkJoin(
            this.userService.getProfileInfo(
                this.userService.getLocalUserInfo().login
            ),
            this.userService.getProfileDetails(
                this.userService.getLocalUserInfo().login
            )
        ).subscribe(
            ([
                { name, surname },
                { email, telephone, country, program, skype },
            ]: [UserProfileInterface, UserProfileDetailsInterface]) => {
                this.formGroup = this.formBuilder.group({
                    name: new FormControl(name),
                    surname: new FormControl(surname),
                    email: new FormControl(email),
                    tel: new FormControl(telephone),
                    country: new FormControl(country),
                    program: new FormControl(program),
                    skype: new FormControl(skype),
                });
            }
        );
    }

    submitInfo() {
        const login = this.userService.getLocalUserInfo().login;
        this.userService
            .changeProfileInfo(login, this.getInfoInterface())
            .subscribe(
                () => console.warn('success'),
                error =>
                    console.warn('error while updating profile info', error)
            );
        this.userService
            .changeProfileDetailsInfo(login, this.getDetailsInterface())
            .subscribe(
                () => console.warn('success'),
                error =>
                    console.warn('error while updating profile details', error)
            );
    }
}
