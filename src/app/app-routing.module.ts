import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat-box/chat.module';
import { ActivateGuard } from 'src/app/activate.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '*', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserModule,
    ChatModule
  ],
  exports: [RouterModule],
  // providers: [ActivateGuard]
})
export class AppRoutingModule { }
