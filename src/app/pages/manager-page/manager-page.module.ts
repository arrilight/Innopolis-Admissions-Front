import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbContextMenuModule,
  NbSidebarService,
  NbMenuModule,
  NbSelectModule,
  NbCardModule,
  NbSpinnerDirective,
  NbSpinnerComponent,
  NbBadgeModule,
  NbUserModule, NbRadioModule, NbDatepickerModule,
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { ManagerPageComponent } from './manager-page.component';
import { SharedModule } from '../../components/shared.module';
import { CommonModule } from '@angular/common';
import { TestPoolComponent } from './components/test-pool/test-pool.component';
import { ManagerPageRoutingModule } from './manager-page-routing.module';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateInfoComponent } from './components/candidate-info/candidate-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ManagerPageComponent,
        TestPoolComponent,
        CandidateListComponent,
        CandidateInfoComponent,
    ],
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
        NbUserModule,
        ReactiveFormsModule,
      NbDatepickerModule.forRoot(),
      NbRadioModule,
    ],
    exports: [TestPoolComponent, CandidateListComponent],
    providers: [NbSidebarService], // we need this service for the sidebar
    entryComponents: [CandidateInfoComponent],
})
export class ManagerPageModule {}
