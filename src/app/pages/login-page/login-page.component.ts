import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // public registrationForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   surname: new FormControl('', Validators.required)
  // });

  constructor(  private router: Router) {}

  ngOnInit() {
  }

  public submitForm(): void {
    this.router.navigate(['candidate']);
  }

}
