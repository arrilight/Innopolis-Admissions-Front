import { RouterModule } from "@angular/router"; // we also need angular router for Nebular to function properly
import {
    NbSidebarModule,
    NbLayoutModule,
    NbSidebarService,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbInputModule,
    NbSelectModule,
} from "@nebular/theme";
import { NgModule } from "@angular/core";
import { LoginPageComponent } from "./login-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../components/shared.module";

@NgModule({
    declarations: [LoginPageComponent],
    imports: [
        SharedModule,
        RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
        NbLayoutModule,
        NbSidebarModule,
        NbButtonModule,
        NbCardModule,
        NbTabsetModule,
        NbInputModule,
        ReactiveFormsModule,
        NbSelectModule,
    ],
    providers: [NbSidebarService], // we need this service for the sidebar
})
export class LoginPageModule {}
