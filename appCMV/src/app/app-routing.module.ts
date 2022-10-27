import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  {path:'',component:PageLoginComponent},
  {path:'agencias', loadChildren:() => import('./agencias/agencias.module').then(m => m.AgenciasModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
