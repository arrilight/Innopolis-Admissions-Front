import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateInterviewsComponent } from '../../components/dumb/candidate-interviews/candidate-interviews.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';

const routes: Routes = [
    { path: 'candidates', component: CandidateListComponent },
    { path: 'interview', component: CandidateInterviewsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManagerPageRoutingModule {}
