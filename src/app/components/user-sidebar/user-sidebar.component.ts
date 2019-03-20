import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  items: NbMenuItem[];

  constructor() {
    this.items = [
      {
        icon: 'fas fa-file-invoice',
        title: 'Documents',
        link: '',
      },
      {
        icon: 'fas far fa-edit',
        title: 'Tests',
        link: '',
      },
      {
        icon: 'fas fa-user',
        title: 'Interviews',
        link: '',
      }
    ];
  }

  ngOnInit() {
  }

}
