import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';

@Component({
  selector: 'app-data-cliente',
  templateUrl: './data-cliente.component.html',
  styleUrls: ['./data-cliente.component.css']
})
export class DataClienteComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

}
