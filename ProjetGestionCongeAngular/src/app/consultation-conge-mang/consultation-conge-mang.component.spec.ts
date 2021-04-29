import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationCongeMangComponent } from './consultation-conge-mang.component';

describe('ConsultationCongeMangComponent', () => {
  let component: ConsultationCongeMangComponent;
  let fixture: ComponentFixture<ConsultationCongeMangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationCongeMangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationCongeMangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
