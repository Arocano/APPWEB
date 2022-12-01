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
    { _id: 1, tipe: 'Preventivo', client: 'Jose Perez', agencia: 'Ambato' },
    { _id: 2, tipe: 'Preventivo', client: 'Maria Gonzalez', agencia: 'Quito' },
    { _id: 3, tipe: 'Correctivo', client: 'Pedro Martinez', agencia: 'Guayaquil' },
    { _id: 4, tipe: 'Correctivo', client: 'Ana Lopez', agencia: 'Manta' },
    { _id: 5, tipe: 'Correctivo', client: 'Luis Garcia', agencia: 'Riobamba' },
    { _id: 6, tipe: 'Preventivo', client: 'Sandra Rodriguez', agencia: 'Quito' },
    { _id: 7, tipe: 'Preventivo', client: 'Miguel Fernandez', agencia: 'Guayaquil' },
    { _id: 8, tipe: 'Preventivo', client: 'Jorge Gomez', agencia: 'Manta' },
    { _id: 9, tipe: 'Preventivo', client: 'Laura Sanchez', agencia: 'Riobamba' },
    { _id: 10, tipe: 'Correctivo', client: 'Carlos Jimenez', agencia: 'Quito' },
    { _id: 11, tipe: 'Preventivo', client: 'Sofia Ruiz', agencia: 'Guayaquil' },
    { _id: 12, tipe: 'Preventivo', client: 'Marta Hernandez', agencia: 'Manta' },
    { _id: 13, tipe: 'Preventivo', client: 'Pablo Diaz', agencia: 'Riobamba' },
    { _id: 14, tipe: 'Preventivo', client: 'Lucia Moreno', agencia: 'Quito' },
    { _id: 15, tipe: 'Correctivo', client: 'Rosa Alvarez', agencia: 'Guayaquil' }
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "Id" },
    { field: "tipe", title: "Tipo" },
    { field: "client", title: "Cliente" },
    { field: "agencia", title: "Agencia" }
  ];

  data: any[] = [];
  totalRecords = this.data.length;

  keypadButton: keypadButton[] = [
    { icon: "cloud_download", tooltip: "EXPORTAR", color: "accent", action: "DOWNLOAD" },
    { icon: "add", tooltip: "AGREGAR", color: "primary", action: "NEW" }
  ]

  constructor(private bottomSheet: MatBottomSheet) {
    this.loadMaintenance();
  }

  ngOnInit(): void {
  }

  loadMaintenance() {
    this.data = this.records;
    this.totalRecords = this.records.length;
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
        this.showBottomSheet("Lista de Mantenimientos", "Mantenimientos", this.records, this.metaDataColumns);
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
