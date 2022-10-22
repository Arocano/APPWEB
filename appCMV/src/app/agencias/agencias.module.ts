import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciasRoutingModule } from './agencias-routing.module';
import { PageListsComponent } from './pages/page-lists/page-lists.component';


@NgModule({
  declarations: [
    PageListsComponent
  ],
  imports: [
    CommonModule,
    AgenciasRoutingModule
  ]
})
export class AgenciasModule { }
