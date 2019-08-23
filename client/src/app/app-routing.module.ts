import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewPopComponent } from './new-pop/new-pop.component';
import { EditPopComponent } from './edit-pop/edit-pop.component';


const routes: Routes = [
	{path: "", component: ListComponent},
	{path: "new", component: NewPopComponent},
	{path: "edit/:_id", component: EditPopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
