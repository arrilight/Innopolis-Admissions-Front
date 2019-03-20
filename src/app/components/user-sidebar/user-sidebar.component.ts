import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbMenuItem, NbMenuService} from '@nebular/theme';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  items: NbMenuItem[];
  @Output() chosen = new EventEmitter<string>();

  constructor(menu: NbMenuService) {
    menu.onItemClick().subscribe(({item}) => {
      this.chosen.emit(item.title);
    });
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
