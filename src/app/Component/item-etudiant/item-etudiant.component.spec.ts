import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEtudiantComponent } from './item-etudiant.component';

describe('ItemEtudiantComponent', () => {
  let component: ItemEtudiantComponent;
  let fixture: ComponentFixture<ItemEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
