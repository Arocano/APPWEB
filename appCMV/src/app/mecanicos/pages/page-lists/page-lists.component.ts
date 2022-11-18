import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/share/interfaces/metacolumn.interface';

@Component({
  selector: 'cmv-page-lists',
  templateUrl: './page-lists.component.html',
  styleUrls: ['./page-lists.component.css']
})
export class PageListsComponent implements OnInit {

  records: any[] =[
    {_id:1850527020,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527021,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527022,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527023,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527024,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527025,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527026,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527027,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527028,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527029,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527030,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527031,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527032,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527033,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527034,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527035,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527036,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527037,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527038,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},
    {_id:1850527039,firstname:'Roberto',lastname:'Ruiz',schedule:'10am-6pm',cellphone:'0983701729',email:'roberto@gmail.com',agency:'Agencia 1'},

  ]
  metaDataColumns:MetaDataColumn[]=[
    {field:"_id",title:"ID"},
    {field:"firstname",title:"NOMBRE"},
    {field:"lastname",title:"APELLIDO"},
    {field:"schedule",title:"HORARIO"},
    {field:"cellphone",title:"CELULAR"},
    {field:"email",title:"EMAIL"},
    {field:"agency",title:"AGENCIA"},
  ]
  data:any[]=[]
  totalRecords=this.data.length
  constructor() {
    this.loadMechanic()
   }

  ngOnInit(): void {
  }
  loadMechanic(){
    this.data=this.records
    this.totalRecords=this.records.length
  }

}
