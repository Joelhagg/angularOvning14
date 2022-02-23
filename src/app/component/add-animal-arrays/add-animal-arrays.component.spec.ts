import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalArraysComponent } from './add-animal-arrays.component';

describe('AddAnimalArraysComponent', () => {
  let component: AddAnimalArraysComponent;
  let fixture: ComponentFixture<AddAnimalArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnimalArraysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimalArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
