import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MecanicosRoutingModule } from './mecanicos-routing.module';
import { PageListsComponent } from './pages/page-lists/page-lists.component';


@NgModule({
  declarations: [
    PageListsComponent
  ],
  imports: [
    CommonModule,
    MecanicosRoutingModule
  ]
})
export class MecanicosModule { }
