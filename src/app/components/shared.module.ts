import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserSidebarComponent} from './user-sidebar/user-sidebar.component';
import {NbCardModule, NbLayoutModule, NbListModule, NbMenuModule, NbSidebarModule, NbUserModule} from '@nebular/theme';
import { DocumentsComponentComponent } from './dumb/documents-component/documents-component.component';
import {NbInputModule} from '@nebular/theme';

@NgModule({
  declarations: [UserSidebarComponent,
    DocumentsComponentComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbUserModule,
    NbCardModule,
    NbListModule,
    NbMenuModule,
    NbSidebarModule,
    NbInputModule
  ],
  exports: [UserSidebarComponent,
    DocumentsComponentComponent
  ]
})

export class SharedModule {
}
