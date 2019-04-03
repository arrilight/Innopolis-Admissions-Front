import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocumentsComponentComponent} from '../../components/dumb/info-form-component/documents-component.component';
import {CandidateTestsComponent} from '../../components/dumb/candidate-tests/candidate-tests.component';
import {CandidateInterviewsComponent} from '../../components/dumb/candidate-interviews/candidate-interviews.component';


const routes: Routes = [
  { path: 'profile', component: DocumentsComponentComponent },
  { path: 'tests', component: CandidateTestsComponent },
  { path: 'interview', component: CandidateInterviewsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatePageRoutingModule {}
