import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MecanicosRoutingModule } from './mecanicos-routing.module';
import { PageListsComponent } from './pages/page-lists/page-lists.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    PageListsComponent
  ],
  imports: [
    CommonModule,
    MecanicosRoutingModule,
    ShareModule
  ]
})
export class MecanicosModule { }
