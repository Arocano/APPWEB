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
  {_id:6,name:'Ambato',address:'Calle A'},
  {_id:7,name:'Riobamba',address:'Calle B'},
  {_id:8,name:'Quito',address:'Calle C'},
  {_id:9,name:'Cuena',address:'Calle D'},
  {_id:10,name:'Guayaquil',address:'Calle E'},
  {_id:11,name:'Ambato',address:'Calle A'},
  {_id:12,name:'Riobamba',address:'Calle B'},
  {_id:13,name:'Quito',address:'Calle C'},
  {_id:14,name:'Cuena',address:'Calle D'},
  {_id:15,name:'Guayaquil',address:'Calle E'},
  {_id:16,name:'Ambato',address:'Calle A'},
  {_id:17,name:'Riobamba',address:'Calle B'},
  {_id:18,name:'Quito',address:'Calle C'},
  {_id:19,name:'Cuena',address:'Calle D'},
  {_id:20,name:'Guayaquil',address:'Calle E'},
  {_id:21,name:'Ambato',address:'Calle A'},
  {_id:22,name:'Riobamba',address:'Calle B'},
  {_id:23,name:'Quito',address:'Calle C'},
  {_id:24,name:'Cuena',address:'Calle D'},
  {_id:25,name:'Guayaquil',address:'Calle E'},
  {_id:26,name:'Ambato',address:'Calle A'},
  {_id:27,name:'Riobamba',address:'Calle B'},
  {_id:28,name:'Quito',address:'Calle C'},
  {_id:29,name:'Cuena',address:'Calle D'},
  {_id:30,name:'Guayaquil',address:'Calle E'},
  {_id:31,name:'Ambato',address:'Calle A'},
  {_id:32,name:'Riobamba',address:'Calle B'},
  {_id:33,name:'Quito',address:'Calle C'},
  {_id:34,name:'Cuena',address:'Calle D'},
  {_id:35,name:'Guayaquil',address:'Calle E'},
 
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
