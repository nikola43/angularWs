import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterTypeEditListSocketComponent } from './center-type-edit-list-socket.component';

describe('CenterTypeEditListSocketComponent', () => {
  let component: CenterTypeEditListSocketComponent;
  let fixture: ComponentFixture<CenterTypeEditListSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterTypeEditListSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterTypeEditListSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
