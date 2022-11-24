import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DownloadComponent } from 'src/app/share/components/download/download.component';
import { keypadButton } from 'src/app/share/interfaces/keypad.interface';
import { MetaDataColumn } from 'src/app/share/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';

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
keypadButton:keypadButton[]=[
  {  icon:"cloud_download",
  tooltip:"Exportar",
  color:"accent",
  action:"download"},
  {  icon:"add",
  tooltip:"agregar",
  color:"primary",
  action:"new"},
]
  constructor(private bottomSheet:MatBottomSheet) {
    this.loadAgencies();
   }


  ngOnInit(): void {
  }

  loadAgencies(){
    this.data=this.records
    this.totalRecords=this.records.length
    this.changePage(0)
  }
  changePage(page:number){
    const pageSize=environment.PAGE_SIZE;
    const skip=pageSize*page;
    this.data=this.records.slice(skip,skip+pageSize);
  }
  openForm(){

  }
  delete(id:any){

  }
  doAction(action:string){
    switch (action) {
      case "download":
        this.showBottomSheet("Lista de Agencias","Agencias",this.records);
        break;
      case "new":
        this.openForm()
        break;
    }
  }
  showBottomSheet(title: string, fileName: string, data: any) {
    this.bottomSheet.open(DownloadComponent);
  }
}
