import {Component, OnInit} from '@angular/core';
import {SocketService} from '../services/socket.service';
import {IGenericTypeModel} from '../models/GenericTypeModel';
import {EmitModel} from '../models/EmitModel';
import {CenterTypeService} from '../services/centerTypeService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {

  }
}
