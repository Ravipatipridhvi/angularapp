import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartbaseComponent } from './departbase.component';

describe('DepartbaseComponent', () => {
  let component: DepartbaseComponent;
  let fixture: ComponentFixture<DepartbaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartbaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
