import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import {NbSidebarModule, NbLayoutModule, NbSidebarService, NbButtonModule, NbCardModule} from '@nebular/theme';
import {NgModule} from '@angular/core';
import {CandidatePageComponent} from './candidate-page.component';
import {SharedModule} from '../../components/shared.module';

@NgModule({
  declarations: [
    CandidatePageComponent
  ],
  imports: [
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    SharedModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [NbSidebarService], // we need this service for the sidebar
})
export class CandidatePageModule {}
