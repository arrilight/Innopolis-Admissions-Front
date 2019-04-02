import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './components/shared.module';

import {
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
} from '@nebular/theme';
import {LoginPageModule} from './pages/login-page/login-page.module';
import {CandidatePageModule} from './pages/candidate-page/candidate-page.module';
import {ManagerPageModule} from './pages/manager-page/manager-page.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './+state';
import {EffectsModule} from '@ngrx/effects';
import {TestsEffects} from './+state/tests/tests.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CandidatePageModule,
    ManagerPageModule,
    LoginPageModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TestsEffects]),
    NbLayoutModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
