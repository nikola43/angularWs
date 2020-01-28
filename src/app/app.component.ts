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
  title = 'AngularSocket';
  centerTypes: IGenericTypeModel[] = [];
  centerType: IGenericTypeModel;

  constructor(private socketService: SocketService, private centerTypeService: CenterTypeService) {
    this.centerType = {
      className: '',
      id: 0,
      type: '',
      temporary: 0,
      createdAt: null,
      deletedAt: null,
      updatedAt: null,
    };
  }

  ngOnInit() {
    this.centerTypeService.getTypes().subscribe((centers) => {
      this.centerTypes = centers;
      console.log(centers);
    });

    this.socketService.onNewCenterType().subscribe((emitData: EmitModel) => {
      if (emitData.action === 'InsertCenterTypeModel') {
        this.centerTypes.push(emitData.data);
      }
      if (emitData.action === 'DeleteCenterTypeModel') {
        this.centerTypes = this.centerTypes.filter((centerType) => centerType.id !== emitData.data);
      }
      if (emitData.action === 'UpdateCenterTypeModel') {
        for (let i = 0; i < this.centerTypes.length; i++) {
          if (this.centerTypes[i].id === emitData.data.id) {
            console.log('sdsdsd');
            console.log(emitData.data);
            this.centerTypes[i] = emitData.data;
          }
        }
      }
    });
  }

  deleteCenterType(i: number) {
    this.centerTypeService.delete(this.centerTypes[i].id).subscribe((deleteResult) => {
    });
  }

  insertCenterType() {
    if (this.centerType.type) {
      this.centerTypeService.insertType(this.centerType.type, this.centerType.temporary).subscribe((center) => {
      });
    } else {
      alert('empy data');
    }
  }

  updateCenterType(i: number) {
    if (this.centerType.type) {
      this.centerTypeService.update(this.centerType.id, this.centerType.type, this.centerType.temporary).subscribe((center) => {
      });
    } else {
      alert('empy data');
    }
  }
}
