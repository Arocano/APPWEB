import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MetaDataColumn } from '../../interfaces/metacolumn.interface';

@Component({
  selector: 'cmv-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() data: any;
@Input() metaDataColumns!: MetaDataColumn[] 
columns:string[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){
    if(changes['metaDataColumns']){
      this.columns=this.metaDataColumns.map((x)=>x.field)
    }
  }


}
