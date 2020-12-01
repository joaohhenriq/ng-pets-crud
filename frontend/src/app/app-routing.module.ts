import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PetsCrudComponent } from './views/pets-crud/pets-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "pets",
    component: PetsCrudComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
