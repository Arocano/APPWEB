import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    TitleComponent,
    ContainerComponent
  ]
})
export class ShareModule {
  TitleComponent = TitleComponent;
  ContainerComponent = ContainerComponent;
 }
