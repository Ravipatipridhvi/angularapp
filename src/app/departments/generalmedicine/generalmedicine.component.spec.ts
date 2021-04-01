import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralmedicineComponent } from './generalmedicine.component';

describe('GeneralmedicineComponent', () => {
  let component: GeneralmedicineComponent;
  let fixture: ComponentFixture<GeneralmedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralmedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
