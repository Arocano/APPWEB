import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/share/interfaces/metacolumn.interface';

@Component({
  selector: 'cmv-page-lists',
  templateUrl: './page-lists.component.html',
  styleUrls: ['./page-lists.component.css']
})
export class PageListsComponent implements OnInit {
records: any[] =[
  {_id:1,name:'Ambato',address:'Calle A'},
  {_id:2,name:'Riobamba',address:'Calle B'},
  {_id:3,name:'Quito',address:'Calle C'},
  {_id:4,name:'Cuena',address:'Calle D'},
  {_id:5,name:'Guayaquil',address:'Calle E'},
]
metaDataColumns:MetaDataColumn[]=[
  {field:"_id",title:"ID"},
  {field:"name",title:"AGENCIA"},
  {field:"address",title:"DIRECCIÓN"},
]
data:any[]=[]
totalRecords=this.data.length
  constructor() {
    this.loadAgencies()
   }


  ngOnInit(): void {
  }

  loadAgencies(){
    this.data=this.records
    this.totalRecords=this.records.length
  }
}
