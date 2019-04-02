import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';

import {
    NbLayoutModule,
    NbMenuModule,
    NbSidebarModule,
    NbThemeModule,
} from '@nebular/theme';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { CandidatePageModule } from './pages/candidate-page/candidate-page.module';
import { ManagerPageModule } from './pages/manager-page/manager-page.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './+state';
import { StaffPageComponent } from './pages/staff-page/staff-page.component';
import { StaffPageModule } from './pages/staff-page/staff-page.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CandidatePageModule,
        ManagerPageModule,
        StaffPageModule,
        LoginPageModule,
        SharedModule,
        StoreModule.forRoot(reducers),
        NbLayoutModule,
        NbThemeModule.forRoot(),
        NbMenuModule.forRoot(),
        NbSidebarModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
