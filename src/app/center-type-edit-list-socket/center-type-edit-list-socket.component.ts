import {Component, OnInit} from '@angular/core';
import {EmitModel} from '../../models/EmitModel';
import {IGenericTypeModel} from '../../models/GenericTypeModel';
import {SocketService} from '../../services/socket.service';
import {CenterTypeService} from '../../services/centerTypeService.service';

@Component({
  selector: 'app-center-type-edit-list-socket',
  templateUrl: './center-type-edit-list-socket.component.html',
  styleUrls: ['./center-type-edit-list-socket.component.css']
})
export class CenterTypeEditListSocketComponent implements OnInit {
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

    this.centerTypeService.getTypes().subscribe((centers) => {
      this.centerTypes = centers;
      console.log(centers);
    });
  }


  ngOnInit() {
    this.socketService.messageObservable().subscribe((emitData: any) => {
      console.log(emitData);
    });
    this.socketService.onNewCenterType().subscribe((emitData: EmitModel) => {
      console.log(emitData);

      if (emitData.action === 'InsertCenterTypeModel') {
        this.centerTypes.push(emitData.data);
      }
      if (emitData.action === 'DeleteCenterTypeModel') {
        this.centerTypes = this.centerTypes.filter((centerType) => centerType.id !== emitData.data);
      }
      if (emitData.action === 'UpdateCenterTypeModel') {
        for (let i = 0; i < this.centerTypes.length; i++) {
          if (this.centerTypes[i].id === emitData.data.id) {
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
    this.socketService.sendMessage('zxczxczc');
    if (this.centerType.type) {
      this.centerTypeService.update(this.centerType.id, this.centerType.type, this.centerType.temporary).subscribe((center) => {
      });
    } else {
      alert('empy data');
    }
  }
}
