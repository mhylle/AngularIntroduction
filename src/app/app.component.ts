import {Component} from '@angular/core';
import {MenuItem} from './menu/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems: MenuItem[] = [];


  constructor() {
    const homeMenu = new MenuItem();
    homeMenu.name = 'Home';
    homeMenu.icon = 'home';
    homeMenu.link = 'Home';
    this.menuItems.push(homeMenu);

    const listMenu = new MenuItem();
    listMenu.name = 'List';
    listMenu.icon = 'home';
    listMenu.link = 'List';
    this.menuItems.push(listMenu);

    const createMenu = new MenuItem();
    createMenu.name = 'Create';
    createMenu.icon = 'plus-square';
    createMenu.link = 'Create';
    this.menuItems.push(createMenu);

    const searchMenu = new MenuItem();
    searchMenu.name = 'Search';
    searchMenu.icon = 'search';
    searchMenu.link = 'Search';
    this.menuItems.push(searchMenu);
  }
}
