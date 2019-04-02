import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
    public loginForm = new FormGroup({
        login: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
    });

    public registrationForm = new FormGroup({
        login: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
        name: new FormControl("", Validators.required),
        surname: new FormControl("", Validators.required),
        second_name: new FormControl("", Validators.required),
        date_of_birth: new FormControl("", Validators.required),
        nationality: new FormControl("", Validators.required),
        skype: new FormControl("", Validators.required),
    });

    constructor(private router: Router) {}

    ngOnInit() {}

    public login(): void {
        this.router.navigate(["candidate"]);
    }

    public submitForm(): void {
        this.router.navigate(["candidate"]);
    }
}
