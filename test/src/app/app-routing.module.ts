import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogComponent } from './components/dog/dog.component';
import { CatComponent } from './components/cat/cat.component'; 

const routes: Routes = [
  {
    path: 'dog', 
    component: DogComponent
  },
  {
    path: 'dog/:type', 
    component: DogComponent
  },
  {
    path: 'cat', 
    component: CatComponent
  },
  {
    path: 'cat/:type', 
    component: CatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
