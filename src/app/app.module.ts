import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';

import {
    NbDialogModule,
    NbDialogService,
    NbLayoutModule,
    NbMenuModule,
    NbSidebarModule,
    NbThemeModule,
    NbWindowModule,
} from '@nebular/theme';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { CandidatePageModule } from './pages/candidate-page/candidate-page.module';
import { ManagerPageModule } from './pages/manager-page/manager-page.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './+state';
import { EffectsModule } from '@ngrx/effects';
import { TestsEffects } from './+state/tests/tests.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StaffPageModule } from './pages/staff-page/staff-page.module';
import { BackendService } from './services/backend/backend.service';
import { AuthService } from './services/auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        CandidatePageModule,
        ManagerPageModule,
        StaffPageModule,
        LoginPageModule,
        SharedModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([TestsEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 10 }),
        NbLayoutModule,
        NbThemeModule.forRoot(),
        NbMenuModule.forRoot(),
        NbSidebarModule.forRoot(),
        HttpClientModule,
        NbWindowModule.forRoot(),
        NbDialogModule.forRoot(),
    ],
    providers: [
        BackendService,
        AuthService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
