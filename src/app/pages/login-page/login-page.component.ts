import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user.service';
import { RegistrationDataInterface } from '../../interfaces/registration-data-interface';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
    public loginForm = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    public registrationForm = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        second_name: new FormControl('', Validators.required),
        date_of_birth: new FormControl('', Validators.required),
        nationality: new FormControl('', Validators.required),
        skype: new FormControl('', Validators.required),
    });

    private getRegistrationInterface(): RegistrationDataInterface {
        return {
            login: this.registrationForm.get('login').value,
            password: this.registrationForm.get('password').value,
            name: this.registrationForm.get('name').value,
            surname: this.registrationForm.get('surname').value,
            second_name: this.registrationForm.get('second_name').value,
            date_of_birth: this.registrationForm.get('date_of_birth').value,
            nationality: this.registrationForm.get('nationality').value,
            skype: this.registrationForm.get('skype').value,
        };
    }

    constructor(
        private router: Router,
        private authService: AuthService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.checkIfAuthenticated();
    }

    public login(): void {
        this.authService
            .login(
                this.loginForm.get('login').value,
                this.loginForm.get('password').value
            )
            .subscribe(
                () =>
                    this.router.navigate([
                        this.userService.getLocalUserInfo().role,
                    ]),
                error => console.log('login error: ', error)
            );
    }

    public submitRegistrationForm(): void {
        this.authService
            .register(this.getRegistrationInterface())
            .subscribe(
                () => this.router.navigate(['login']),
                error => console.warn('error while registration', error)
            );
    }

    private checkIfAuthenticated(): void {
        if (this.authService.isAuthenticated()) {
            this.router.navigate([this.userService.getLocalUserInfo().role]);
        }
    }
}
