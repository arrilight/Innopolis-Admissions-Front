import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';
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

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

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
      this.userService.getProfileInfo(this.userService.getLocalUserInfo().login),
      this.userService.getProfileDetails(this.userService.getLocalUserInfo().login)
    ).subscribe(([{ name, surname }, { email, telephone, country }]: [UserProfileInterface, UserProfileDetailsInterface]) => {
      this.formGroup = this.formBuilder.group(
        {
          name: new FormControl(name),
          surname: new FormControl(surname),
          email: new FormControl(email),
          tel: new FormControl(telephone),
          country: new FormControl(country),
        }
      );
    });

  }
}
