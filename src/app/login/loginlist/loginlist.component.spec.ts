import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginlistComponent } from './loginlist.component';

describe('LoginlistComponent', () => {
  let component: LoginlistComponent;
  let fixture: ComponentFixture<LoginlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
