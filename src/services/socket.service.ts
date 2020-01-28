import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  // EMITTER
  sendMessage(msg: string) {
    this.socket.emit('sendMessage', { message: msg });
  }

  // HANDLER
  onNewCenterType() {
    return Observable.create((observer) => {
      this.socket.on('DBEvent', data => {
        data
          ? observer.next(data)
          : observer.error('unable to reach server');
      });
    });
  }
}
