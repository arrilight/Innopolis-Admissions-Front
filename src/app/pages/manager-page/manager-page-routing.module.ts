import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateInterviewsComponent } from '../../components/dumb/candidate-interviews/candidate-interviews.component';
import { TestPoolComponent } from './components/test-pool/test-pool.component';

const routes: Routes = [
  { path: 'tests', component: TestPoolComponent },
  { path: 'interview', component: CandidateInterviewsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerPageRoutingModule {}
