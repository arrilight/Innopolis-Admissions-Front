import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user.service';

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

    public submitForm(): void {
        this.router.navigate(['candidate']);
    }

    private checkIfAuthenticated(): void {
        if (this.authService.isAuthenticated()) {
            this.router.navigate([this.userService.getLocalUserInfo().role]);
        }
    }
}
