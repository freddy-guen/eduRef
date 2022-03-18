import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantManageComponent } from './etudiant-manage.component';

describe('EtudiantManageComponent', () => {
  let component: EtudiantManageComponent;
  let fixture: ComponentFixture<EtudiantManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
