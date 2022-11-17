import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    TitleComponent,
    ContainerComponent,
    TableComponent
  ]
})
export class ShareModule {
  TitleComponent = TitleComponent;
  ContainerComponent = ContainerComponent;
 }
