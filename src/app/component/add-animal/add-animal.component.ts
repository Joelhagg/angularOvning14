import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {

  name = new FormControl('');
  type = new FormControl('');
  description = new FormControl('');

  changeName() {
    this.name.setValue('Joel');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
