import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CandidatePageComponent } from './candidate-page/candidate-page.component';
import {SharedModule} from '../components/shared.module';

@NgModule({
  declarations: [LoginPageComponent, CandidatePageComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  providers: []
})
export class PagesModule {}
