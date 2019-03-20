import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbContextMenuModule, NbSidebarService, NbMenuModule} from '@nebular/theme';
import {NgModule} from '@angular/core';
import {CandidatePageComponent} from './candidate-page.component';
import {UserSidebarComponent} from '../../components/user-sidebar/user-sidebar.component';
import {SharedModule} from '../../components/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CandidatePageComponent
  ],
  imports: [
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbContextMenuModule,
    SharedModule,
    CommonModule
  ],
  providers: [NbSidebarService], // we need this service for the sidebar
})
export class CandidatePageModule {}
