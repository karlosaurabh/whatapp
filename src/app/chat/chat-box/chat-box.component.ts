import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../app.service';
import { SocketService } from '../../socket.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
  providers: [SocketService]
})
export class ChatBoxComponent implements OnInit {

  public authToken: any;
  public userInfo: any;
  public receiverId: any;
  public receiverName: any;
  public userList: any;
  public disconnectedSocket: boolean;

  constructor(
    private toastr: ToastrService,
    private AppService: AppService,
    private SocketService: SocketService,
    private router: Router

  ) {
    this.receiverId = Cookie.get('receiverId');
    this.receiverName = Cookie.get('receiverName');
  }

  ngOnInit() {
    this.authToken = Cookie.get('authToken');

    this.userInfo = this.AppService.getUserInfoInFromLocalStorage();

    this.receiverId = Cookie.get("reciverId");

    this.receiverName = Cookie.get('reciverName');
    console.log('this.aut', this.receiverId, this.authToken);
    console.log('this.aut', this.userInfo);

    this.checkStatus();

  }

  public checkStatus: any = () => {
    if (Cookie.get('authToken') == undefined || Cookie.get('authToken') == '' || Cookie.get('authToken') == null) {
      this.router.navigate(['/']);
      return false;
    } else {
      console.log('we access the auth token')
      return true;
    }
  }

}
