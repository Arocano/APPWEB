import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoMantenimientosRoutingModule } from './tipo-mantenimientos-routing.module';
import { PageListsComponent } from './pages/page-lists/page-lists.component';


@NgModule({
  declarations: [
    PageListsComponent
  ],
  imports: [
    CommonModule,
    TipoMantenimientosRoutingModule
  ]
})
export class TipoMantenimientosModule { }
