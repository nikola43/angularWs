import {Component, OnInit} from '@angular/core';
import {SocketService} from '../services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'AngularSocket';
  users = ['paulo', 'juan', 'pepe', 'luis'];
  newUser: string;

  constructor( private socketService: SocketService) {
  }
  ngOnInit() {
    this.socketService.onNewMessage().subscribe(msg => {
      console.log('got a msg: ' + msg);
    });
  }
  deleteUser(i: number) {
    this.users = this.users.filter((item) => {
      return item !== this.users[i];
    });
  }
  insertUser() {
    this.users.push(this.newUser);
    this.socketService.sendMessage('hola');
  }
}
