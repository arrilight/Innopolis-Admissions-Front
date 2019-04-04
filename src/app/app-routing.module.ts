import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CandidatePageComponent } from './pages/candidate-page/candidate-page.component';
import { ManagerPageComponent } from './pages/manager-page/manager-page.component';
import { StaffPageComponent } from './pages/staff-page/staff-page.component';
import { CandidateTestsComponent } from './components/dumb/candidate-tests/candidate-tests.component';
import { TestComponent } from './components/dumb/test/test.component';
import { DocumentsComponentComponent } from './components/dumb/info-form-component/documents-component.component';
import { CandidateInterviewsComponent } from './components/dumb/candidate-interviews/candidate-interviews.component';

const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'login', component: LoginPageComponent },
    {
        path: 'candidate',
        component: CandidatePageComponent,
        children: [
            { path: 'tests', component: CandidateTestsComponent },
            { path: 'test/:testId', component: TestComponent },
            { path: 'profile', component: DocumentsComponentComponent },
            { path: 'interviews', component: CandidateInterviewsComponent },
        ],
    },
    { path: 'manager', component: ManagerPageComponent },
    { path: 'staff', component: StaffPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
