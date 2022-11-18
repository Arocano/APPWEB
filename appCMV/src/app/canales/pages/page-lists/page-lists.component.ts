import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/share/interfaces/metacolumn.interface';

@Component({
  selector: 'cmv-page-lists',
  templateUrl: './page-lists.component.html',
  styleUrls: ['./page-lists.component.css']
})
export class PageListsComponent implements OnInit {
  records: any[] =[
    {_id:1,name:'Llamada',description:'Llamadas telefónicas',schedule:'Lunes a Viernes de 8:00 a 17:00'},
    {_id:2,name:'Correos',description:'Correos electrónicos',schedule:'Lunes a Viernes de 8:00 a 17:00'},
    {_id:3,name:'Mensajes',description:'Mensajes de texto',schedule:'Lunes a Viernes de 8:00 a 17:00'},
    {_id:4,name:'Whatsapp',description:'Mensajes de whatsapp',schedule:'Lunes a Viernes de 8:00 a 17:00'},
  ]
  metaDataColumns:MetaDataColumn[]=[
    {field:"_id",title:"ID"},
    {field:"name",title:"CANAL"},
    {field:"description",title:"DESCRIPCIÓN"},
    {field:"schedule",title:"HORARIO"},
  ]
  data:any[]=[]
  totalRecords=this.data.length
  constructor() {
    this.loadChanels()
   }

  ngOnInit(): void {
  }
  
  loadChanels(){
    this.data=this.records
    this.totalRecords=this.records.length
  }

}
