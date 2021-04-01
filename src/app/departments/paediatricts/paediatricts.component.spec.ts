import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaediatrictsComponent } from './paediatricts.component';

describe('PaediatrictsComponent', () => {
  let component: PaediatrictsComponent;
  let fixture: ComponentFixture<PaediatrictsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaediatrictsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaediatrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
