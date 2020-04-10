import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//THIS IS FOR HTTP REQUEST
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//CUSTOM MODULES
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat-box/chat.module';
import { AppService } from './app.service';
//NG2-TOSTOR
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SocketService } from './socket.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        UserModule,
        ChatModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()

    ],
    providers: [AppService, SocketService],
    bootstrap: [AppComponent]
})
export class AppModule { }
