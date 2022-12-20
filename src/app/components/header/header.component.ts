import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PoLinkComponent, PoMenuPanelItem } from '@po-ui/ng-components';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  title = 'Welcome to App Remember'

  public readonly menuItems: Array<PoMenuPanelItem> = [
    { label: 'Lembretes', action: this.changeTitle.bind(this), icon: 'po-icon-home', link: "/"},
    { label: 'List', action: this.changeTitle.bind(this), icon: 'po-icon-list', link: "/remembers/view"},
    { label: 'Criar', action: this.changeTitle.bind(this), icon: 'po-icon-plus', link: "/remembers"},
  ];

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
  }

  ngOnInit(): void {
  }


}
