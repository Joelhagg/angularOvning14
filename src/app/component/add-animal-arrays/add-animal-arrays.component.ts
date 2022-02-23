import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-animal-arrays',
  templateUrl: './add-animal-arrays.component.html',
  styleUrls: ['./add-animal-arrays.component.scss']
})
export class AddAnimalArraysComponent implements OnInit {
  animalForm = this.fb.group({
    name: [''],
    type: [''],
    description: [''],
    nickNames: this.fb.array([this.fb.control('')])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get nickNames(): FormArray {
    return this.animalForm.get('nickNames') as FormArray
  }

  addNickName() {
    this.nickNames.push(this.fb.control(''))
  }

}
