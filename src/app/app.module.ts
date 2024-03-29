import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddAnimalComponent } from './component/add-animal/add-animal.component';
import { AddAnimalGroupsComponent } from './component/add-animal-groups/add-animal-groups.component';
import { AddAnimalBuilderComponent } from './component/add-animal-builder/add-animal-builder.component';
import { AddAnimalArraysComponent } from './component/add-animal-arrays/add-animal-arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalComponent,
    AddAnimalGroupsComponent,
    AddAnimalBuilderComponent,
    AddAnimalArraysComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
