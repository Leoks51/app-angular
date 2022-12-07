import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RememberCreateComponent } from './components/remember/remember-create/remember-create.component';
import { RememberModalComponent } from './components/remember/remember-modal/remember-modal.component';
import { HomeComponent } from './home/home.component';
import { RememberCrudComponent } from './remember/remember-crud/remember-crud.component';

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "remembers", component: RememberCrudComponent },
  { path: "remembers/create", component: RememberCreateComponent},
  { path: "remembers/edit", component: RememberModalComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
