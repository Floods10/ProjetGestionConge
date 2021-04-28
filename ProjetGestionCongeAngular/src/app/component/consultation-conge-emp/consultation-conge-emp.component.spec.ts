import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationCongeEmpComponent } from './consultation-conge-emp.component';

describe('ConsultationCongeEmpComponent', () => {
  let component: ConsultationCongeEmpComponent;
  let fixture: ComponentFixture<ConsultationCongeEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationCongeEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationCongeEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
