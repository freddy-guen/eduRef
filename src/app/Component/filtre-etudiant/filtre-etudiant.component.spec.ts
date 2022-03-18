import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreEtudiantComponent } from './filtre-etudiant.component';

describe('FiltreEtudiantComponent', () => {
  let component: FiltreEtudiantComponent;
  let fixture: ComponentFixture<FiltreEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltreEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
