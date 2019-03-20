import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import {NgModule} from '@angular/core';
import {CandidatePageComponent} from './candidate-page.component';

@NgModule({
  declarations: [
    CandidatePageComponent
  ],
  imports: [
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
  ],
  providers: [NbSidebarService], // we need this service for the sidebar
})
export class CandidatePageModule {}
