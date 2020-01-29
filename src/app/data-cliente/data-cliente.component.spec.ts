import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataClienteComponent } from './data-cliente.component';

describe('DataClienteComponent', () => {
  let component: DataClienteComponent;
  let fixture: ComponentFixture<DataClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
