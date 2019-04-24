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
    NbRadioModule,
    NbCheckboxModule,
    NbButtonModule,
    NbDialogService,
    NbDialogRef,
    NbSpinnerModule,
    NbBadgeModule,
} from '@nebular/theme';
import { DocumentsComponentComponent } from './dumb/info-form-component/documents-component.component';
import { NbInputModule } from '@nebular/theme';
import { CandidateTestsComponent } from './dumb/candidate-tests/candidate-tests.component';
import { CandidateInterviewsComponent } from './dumb/candidate-interviews/candidate-interviews.component';
import { TestComponent } from './dumb/test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StaffInterviewsComponent } from './dumb/staff-interviews/staff-interviews.component';
import { UserService } from '../services/user/user.service';
import { InterviewCardComponent } from './dumb/interview-card/interview-card.component';

// @ts-ignore
@NgModule({
    declarations: [
        UserSidebarComponent,
        DocumentsComponentComponent,
        CandidateTestsComponent,
        CandidateInterviewsComponent,
        TestComponent,
        StaffInterviewsComponent,
        InterviewCardComponent,
    ],
    imports: [
        CommonModule,
        NbLayoutModule,
        NbSidebarModule,
        NbUserModule,
        NbCardModule,
        NbListModule,
        NbMenuModule,
        NbButtonModule,
        NbSidebarModule,
        NbInputModule,
        NbCardModule,
        NbProgressBarModule,
        NbSelectModule,
        NbRadioModule,
        NbCheckboxModule,
        ReactiveFormsModule,
    ],
    exports: [
        UserSidebarComponent,
        DocumentsComponentComponent,
        CandidateTestsComponent,
        CandidateInterviewsComponent,
        InterviewCardComponent,
        TestComponent,
    ],
    entryComponents: [TestComponent, InterviewCardComponent],
    providers: [UserService, NbDialogService],
})
export class SharedModule {}
