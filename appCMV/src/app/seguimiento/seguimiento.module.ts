import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguimientoRoutingModule } from './seguimiento-routing.module';
import { PageListsComponent } from './pages/page-lists/page-lists.component';


@NgModule({
  declarations: [
    PageListsComponent
  ],
  imports: [
    CommonModule,
    SeguimientoRoutingModule
  ]
})
export class SeguimientoModule { }
