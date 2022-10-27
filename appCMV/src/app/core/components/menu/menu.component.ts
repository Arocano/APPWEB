import { Component, OnInit } from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'cmv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listMenu: IMenu[];
  constructor(
    private menuService:MenuService
  ) { 
    this.listMenu = this.menuService.getMenu();
  }

  ngOnInit(): void {
  }

}
