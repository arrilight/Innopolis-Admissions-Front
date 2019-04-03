import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import {
    NbCardModule,
    NbLayoutModule,
    NbListModule,
    NbMenuModule,
    NbSidebarModule,
    NbUserModule,
    NbProgressBarModule,
    NbSelectModule,
} from '@nebular/theme';
import { DocumentsComponentComponent } from './dumb/info-form-component/documents-component.component';
import { NbInputModule } from '@nebular/theme';
import { CandidateTestsComponent } from './dumb/candidate-tests/candidate-tests.component';
import { CandidateInterviewsComponent } from './dumb/candidate-interviews/candidate-interviews.component';
import { TestComponent } from './dumb/test/test.component';

// @ts-ignore
@NgModule({
    declarations: [
        UserSidebarComponent,
        DocumentsComponentComponent,
        CandidateTestsComponent,
        CandidateInterviewsComponent,
        TestComponent,
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
        NbSelectModule,
    ],
    exports: [
        UserSidebarComponent,
        DocumentsComponentComponent,
        CandidateTestsComponent,
        CandidateInterviewsComponent,
        TestComponent,
    ],
})
export class SharedModule {}
