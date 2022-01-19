import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditligneProduitComponent } from './editligne-produit.component';

describe('EditligneProduitComponent', () => {
  let component: EditligneProduitComponent;
  let fixture: ComponentFixture<EditligneProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditligneProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditligneProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
