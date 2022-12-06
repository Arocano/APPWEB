import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciasRoutingModule } from './agencias-routing.module';
import { PageListsComponent } from './pages/page-lists/page-lists.component';
import { ShareModule } from '../share/share.module';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    PageListsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AgenciasRoutingModule,
    ShareModule
  ]
})
export class AgenciasModule { }
