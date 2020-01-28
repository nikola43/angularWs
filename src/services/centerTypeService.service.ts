import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IGenericTypeModel} from '../models/GenericTypeModel';

@Injectable({
  providedIn: 'root'
})
export class CenterTypeService {
  constructor(private http: HttpClient) {
  }

  getTypes(): Observable<IGenericTypeModel[]> {
    return this.http.get<IGenericTypeModel[]>('http://localhost:3000/api/v1/centers_types');
  }

  insertType(name: string, temporary: number): Observable<IGenericTypeModel> {
    const data = {type: name, temporary: temporary};
    return this.http.post<IGenericTypeModel>('http://localhost:3000/api/v1/centers_types',
      JSON.stringify(data), {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  update(id: number, name: string, temporary: number): Observable<IGenericTypeModel> {
    const data = {type: name, temporary: temporary};
    return this.http.patch<IGenericTypeModel>('http://localhost:3000/api/v1/centers_types/' + id,
      JSON.stringify(data), {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>('http://localhost:3000/api/v1/centers_types/' + id);
  }


}
