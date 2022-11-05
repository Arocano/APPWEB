import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanalesRoutingModule } from './canales-routing.module';
import { PageListsComponent } from './pages/page-lists/page-lists.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    PageListsComponent
  ],
  imports: [
    CommonModule,
    CanalesRoutingModule,
    ShareModule
  ]
})
export class CanalesModule { }
