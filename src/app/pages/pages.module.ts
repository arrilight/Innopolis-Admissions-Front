import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CandidatePageComponent } from './candidate-page/candidate-page.component';

@NgModule({
  declarations: [LoginPageComponent, CandidatePageComponent],
  imports: [CommonModule, RouterModule],
  providers: []
})
export class PagesModule {}
