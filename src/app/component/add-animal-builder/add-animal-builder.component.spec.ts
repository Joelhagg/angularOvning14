import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalBuilderComponent } from './add-animal-builder.component';

describe('AddAnimalBuilderComponent', () => {
  let component: AddAnimalBuilderComponent;
  let fixture: ComponentFixture<AddAnimalBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnimalBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimalBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
