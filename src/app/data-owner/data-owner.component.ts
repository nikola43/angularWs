import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.action';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-owner',
  templateUrl: './data-owner.component.html',
  styleUrls: ['./data-owner.component.css']
})
export class DataOwnerComponent implements OnInit {
  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit() {
  }


}
