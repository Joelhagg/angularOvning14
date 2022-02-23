import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-animal-groups',
  templateUrl: './add-animal-groups.component.html',
  styleUrls: ['./add-animal-groups.component.scss']
})
export class AddAnimalGroupsComponent implements OnInit {
  animalGroupForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    description: new FormControl('')
  });

  saveForm() {
    console.log(this.animalGroupForm.value);
    
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
