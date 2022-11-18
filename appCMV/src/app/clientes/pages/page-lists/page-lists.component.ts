import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/share/interfaces/metacolumn.interface';

@Component({
  selector: 'cmv-page-lists',
  templateUrl: './page-lists.component.html',
  styleUrls: ['./page-lists.component.css']
})
export class PageListsComponent implements OnInit {
  records: any[] =[
    {_id:1850526810,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526811,firstname:'Juan',lastname:'Reyes',cellphone:'0983701730',email:'juan@gmail.com',address:'Centro Ambato'},
    {_id:1850526812,firstname:'Marco',lastname:'Fuentes',cellphone:'0983701718',email:'marco@gmail.com',address:'Centro Ambato'},
    {_id:1850526813,firstname:'María',lastname:'Ortiz',cellphone:'0983701728',email:'maria@gmail.com',address:'Centro Ambato'},
    {_id:1850526814,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526815,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526816,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526817,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526818,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526819,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526820,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526821,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526822,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526823,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526824,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526825,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526826,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526827,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526828,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526829,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526830,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526831,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526832,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526833,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526834,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526835,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526836,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526837,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526838,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526839,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526840,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
    {_id:1850526841,firstname:'Luis',lastname:'Pérez',cellphone:'0983701729',email:'luis@gmail.com',address:'Centro Ambato'},
  ]
  metaDataColumns:MetaDataColumn[]=[
    {field:"_id",title:"ID"},
    {field:"firstname",title:"NOMBRE"},
    {field:"lastname",title:"APELLIDO"},
    {field:"cellphone",title:"CELULAR"},
    {field:"email",title:"EMAIL"},
    {field:"address",title:"DIRECCIÓN"},
  ]
  data:any[]=[]
  totalRecords=this.data.length
  constructor() {
    this.loadClients()
   }


  ngOnInit(): void {
  }
  loadClients(){
    this.data=this.records
    this.totalRecords=this.records.length
  }

}
