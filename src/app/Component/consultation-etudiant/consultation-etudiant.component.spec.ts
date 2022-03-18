import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationEtudiantComponent } from './consultation-etudiant.component';

describe('ConsultationEtudiantComponent', () => {
  let component: ConsultationEtudiantComponent;
  let fixture: ComponentFixture<ConsultationEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
