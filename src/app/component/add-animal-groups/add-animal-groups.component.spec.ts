import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalGroupsComponent } from './add-animal-groups.component';

describe('AddAnimalGroupsComponent', () => {
  let component: AddAnimalGroupsComponent;
  let fixture: ComponentFixture<AddAnimalGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnimalGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimalGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
