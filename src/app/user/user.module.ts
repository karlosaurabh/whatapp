import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
    declarations: [
        SignupComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'sign-up', component: SignupComponent }
        ]),
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),

    ],
    providers: [],
})
export class UserModule {

}