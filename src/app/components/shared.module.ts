import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserSidebarComponent} from './user-sidebar/user-sidebar.component';
import {NbCardModule, NbLayoutModule, NbListModule, NbMenuModule, NbSidebarModule, NbUserModule,  NbProgressBarModule, NbSelectModule} from '@nebular/theme';
import { DocumentsComponentComponent } from './dumb/documents-component/documents-component.component';
import {NbInputModule} from '@nebular/theme';
import { CandidateTestsComponent } from './dumb/candidate-tests/candidate-tests.component';

@NgModule({
  declarations: [UserSidebarComponent,
    DocumentsComponentComponent,
    CandidateTestsComponent
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
    NbInputModule,
    NbProgressBarModule,
    NbSelectModule
  ],
  exports: [UserSidebarComponent,
    DocumentsComponentComponent,
    CandidateTestsComponent
  ]
})

export class SharedModule {}

