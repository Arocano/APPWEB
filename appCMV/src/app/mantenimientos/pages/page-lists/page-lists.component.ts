import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/share/interfaces/metacolumn.interface';

@Component({
  selector: 'cmv-page-lists',
  templateUrl: './page-lists.component.html',
  styleUrls: ['./page-lists.component.css']
})
export class PageListsComponent implements OnInit {

  records: any[] =[
    {_id:1,date:'2020/05/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:2,date:'2020/06/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:3,date:'2020/06/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:4,date:'2020/07/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:5,date:'2020/08/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:6,date:'2020/10/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:7,date:'2020/11/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:8,date:'2020/12/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:9,date:'2020/13/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:10,date:'2020/15/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:11,date:'2020/16/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:12,date:'2020/20/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:13,date:'2020/21/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:14,date:'2020/22/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:15,date:'2020/23/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:16,date:'2020/24/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:17,date:'2020/25/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:18,date:'2020/26/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:19,date:'2020/27/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:20,date:'2020/28/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},
    {_id:21,date:'2020/29/12',mechanic:'Roberto Ruiz',client:'Luis Pérez',agency:'Agencia 1'},

  ]
  metaDataColumns:MetaDataColumn[]=[
    {field:"_id",title:"ID"},
    {field:"date",title:"FECHA"},
    {field:"mechanic",title:"MECÁNICO"},
    {field:"client",title:"CLIENTE"},
    {field:"agency",title:"AGENCIA"},
  ]
  data:any[]=[]
  totalRecords=this.data.length
  constructor() {
    this.loadMaintenance()
   }


  ngOnInit(): void {
  }
  loadMaintenance(){
    this.data=this.records
    this.totalRecords=this.records.length
  }

}
