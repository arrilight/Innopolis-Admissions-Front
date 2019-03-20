import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';

import {NbMenuModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';
import {LoginPageModule} from './pages/login-page/login-page.module';
import {CandidatePageModule} from './pages/candidate-page/candidate-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CandidatePageModule,
    LoginPageModule,
    SharedModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
