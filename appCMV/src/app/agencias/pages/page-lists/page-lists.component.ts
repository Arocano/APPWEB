import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AgencyServiceService } from 'src/app/services/agency-service.service';
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

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "Id" },
    { field: "name", title: "Agencia" },
    { field: "address", title: "Dirección" }
  ];
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
records:any[]=[];
  constructor(private bottomSheet:MatBottomSheet,private agencyService: AgencyServiceService) {
    this.records=this.agencyService.getRecords();
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
