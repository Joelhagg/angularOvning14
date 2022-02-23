import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-animal-builder',
  templateUrl: './add-animal-builder.component.html',
  styleUrls: ['./add-animal-builder.component.scss']
})
export class AddAnimalBuilderComponent implements OnInit {
  animalForm = this.fb.group({
    name: ['', Validators.required],
    type: [''],
    description: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
