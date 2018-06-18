import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTowersComponent } from './list-towers.component';

describe('ListTowersComponent', () => {
  let component: ListTowersComponent;
  let fixture: ComponentFixture<ListTowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
