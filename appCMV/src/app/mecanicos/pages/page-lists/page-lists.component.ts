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

  records: any[] = [
    {_id:1, name:'José', lastname:'Pérez', phone:'123456789'},
    {_id:2, name:'María', lastname:'González', phone:'987654321'},
    {_id:3, name:'Pedro', lastname:'Martínez', phone:'123987456'},
    {_id:4, name:'Ana', lastname:'López', phone:'456789123'},
    {_id:5, name:'Luis', lastname:'García', phone:'789456888'},
    {_id:6, name:'Sandra', lastname:'Rodríguez', phone:'123456789'},
    {_id:7, name:'Miguel', lastname:'Fernández', phone:'987654321'},
    {_id:8, name:'Jorge', lastname:'Gómez', phone:'123987456'},
    {_id:9, name:'Laura', lastname:'Sánchez', phone:'456789123'},
    {_id:10, name:'Carlos', lastname:'Jiménez', phone:'789456888'},
    {_id:11, name:'Sofía', lastname:'Ruiz', phone:'123456789'},
    {_id:12, name:'Marta', lastname:'Hernández', phone:'987654321'},
    {_id:13, name:'Pablo', lastname:'Díaz', phone:'123987456'},
    {_id:14, name:'Lucía', lastname:'Moreno', phone:'456789123'},
    {_id:15, name:'Rosa', lastname:'Alvarez', phone:'789456888'},
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "Id" },
    { field: "name", title: "Nombre" },
    { field: "lastname", title: "Apellido" },
    { field: "phone", title: "Teléfono" }
  ];

  data: any[] = [];
  totalRecords = this.data.length;

  keypadButton: keypadButton[] = [
    { icon: "cloud_download", tooltip: "EXPORTAR", color: "accent", action: "DOWNLOAD" },
    { icon: "add", tooltip: "AGREGAR", color: "primary", action: "NEW" }
  ]

  constructor(private bottomSheet: MatBottomSheet) {
    this.loadMechanics();
  }

  ngOnInit(): void {
  }

  loadMechanics() {
    this.data=this.records;
    this.totalRecords=this.records.length;
    this.changePage(0);
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = page * pageSize;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  openForm() {
  }

  delete(id: any) {

  }

  doAction(action: string) {
    switch (action) {
      case "DOWNLOAD":
        this.showBottomSheet("Lista de Mecanicos", "Mecanicos", this.records, this.metaDataColumns);
        break;
      case "NEW":
        this.openForm();
        break;
    }
  }

  showBottomSheet(title: string, fileName: string, data: any, header:any) {
    this.bottomSheet.open(DownloadComponent);
    DownloadComponent.title = title;
    DownloadComponent.fileName = fileName;
    DownloadComponent.data = data;
    DownloadComponent.header = header;
  }
}
