import {Component, OnInit} from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-candidate-page',
  templateUrl: './candidate-page.component.html',
  styleUrls: ['./candidate-page.component.css'],
})
export class CandidatePageComponent implements OnInit {
  items = [
    {title: 'Notification 1'},
    {title: 'A looooong text of a notification'},
    {title: 'Notification 2'},
  ];

  menuList: NbMenuItem[] = [
    {
      icon: 'fas fa-file-invoice',
      title: 'Profile information',
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
    },
  ];

  currentSubPage = 'Profile information';

  constructor() {
  }

  ngOnInit() {
  }

  setSubPage(name: string) {
    this.currentSubPage = name;
  }
}
