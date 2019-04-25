import {
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
    NbContextMenuModule,
    NbSidebarService,
    NbMenuModule,
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CandidatePageComponent } from './candidate-page.component';
import { SharedModule } from '../../components/shared.module';
import { CommonModule } from '@angular/common';
import { CandidatePageRoutingModule } from './candidate-page-routing.module';

@NgModule({
    declarations: [CandidatePageComponent],
    imports: [
        CandidatePageRoutingModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
        NbLayoutModule,
        NbSidebarModule,
        NbMenuModule.forRoot(),
        NbButtonModule,
        NbContextMenuModule,
        SharedModule,
        CommonModule,
    ],
    providers: [NbSidebarService], // we need this service for the sidebar
})
export class CandidatePageModule {}
