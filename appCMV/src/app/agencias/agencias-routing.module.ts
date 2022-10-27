import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListsComponent } from './pages/page-lists/page-lists.component';

const routes: Routes = [
  {path:'', component: PageListsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciasRoutingModule { }
