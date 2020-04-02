import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatBoxComponent } from './chat-box.component';
import { ToastrModule } from 'ngx-toastr';
import { ActivateGuard } from 'src/app/activate.guard';
@NgModule({
    declarations: [
        ChatBoxComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'chat', component: ChatBoxComponent, canActivate: [ActivateGuard] }
        ]),
        ToastrModule.forRoot()

    ],
    providers: [],
})
export class ChatModule {

}