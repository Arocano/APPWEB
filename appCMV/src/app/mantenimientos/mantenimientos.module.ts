import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { PageListsComponent } from './pages/page-lists/page-lists.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    PageListsComponent
  ],
  imports: [
    CommonModule,
    MantenimientosRoutingModule,
    ShareModule
  ]
})
export class MantenimientosModule { }
