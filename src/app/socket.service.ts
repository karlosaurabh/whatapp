import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'https://chatapi.edwisor.com/api/v1/';
  private socket;

  constructor() {

    //connection is being started or handshake we can say
    this.socket = io(this.url);

  }

  //***** EVENT TO BE LISTENED *****

  public verifyUser = () => {
    return Observable.create((observer) => {
      this.socket.on('verifyUser', (data) => {
        console.log('socket data', data);
        observer.next(data)
      })
    })
  }

  public onlineUserList = () => {
    return Observable.create((observer) => {
      this.socket.on('online-user-list', (userList) => {
        observer.next(userList);
      });//end socket
    });
  }//onlineUserList end

  public disconnectedSocket = () => {
    return Observable.create((observer) => {
      this.socket.on('disconnect', () => {
        observer.next();
      });//end socket
    });
  }//disconnectedSocket end


  //******** EVENT TO BE EMITTED ********

  public setUser = (authToken) => {
    this.socket.emit('set-user', authToken)
  }




}
