import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import {
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
    NbContextMenuModule,
    NbSidebarService,
    NbMenuModule,
    NbSelectModule,
    NbCardModule,
    NbDialogService,
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { StaffPageComponent } from './staff-page.component';
import { SharedModule } from '../../components/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [StaffPageComponent],
    imports: [
        RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
        NbLayoutModule,
        NbSidebarModule,
        NbMenuModule.forRoot(),
        NbButtonModule,
        NbContextMenuModule,
        SharedModule,
        CommonModule,
        NbSelectModule,
        NbCardModule,
    ],
    providers: [NbSidebarService], // we need this service for the sidebar
})
export class StaffPageModule {}
