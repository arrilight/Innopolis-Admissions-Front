import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbContextMenuModule,
  NbSidebarService,
  NbMenuModule,
  NbSelectModule,
  NbCardModule, NbSpinnerDirective, NbSpinnerComponent, NbBadgeModule,
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { ManagerPageComponent } from './manager-page.component';
import { SharedModule } from '../../components/shared.module';
import { CommonModule } from '@angular/common';
import { TestPoolComponent } from './components/test-pool/test-pool.component';
import { ManagerPageRoutingModule } from './manager-page-routing.module';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';

@NgModule({
    declarations: [ManagerPageComponent, TestPoolComponent, CandidateListComponent, NbSpinnerDirective],
    imports: [
        ManagerPageRoutingModule,
        NbLayoutModule,
        NbSidebarModule,
        NbMenuModule.forRoot(),
        NbButtonModule,
        NbContextMenuModule,
        SharedModule,
        CommonModule,
        NbSelectModule,
        NbCardModule,
      NbBadgeModule,
    ],
    exports: [TestPoolComponent, CandidateListComponent],
    providers: [NbSidebarService], // we need this service for the sidebar
})
export class ManagerPageModule {}
