import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CandidatePageComponent } from './pages/candidate-page/candidate-page.component';
import { ManagerPageComponent } from './pages/manager-page/manager-page.component';
import { StaffPageComponent } from './pages/staff-page/staff-page.component';

const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'candidate', component: CandidatePageComponent },
    { path: 'manager', component: ManagerPageComponent },
    { path: 'staff', component: StaffPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
