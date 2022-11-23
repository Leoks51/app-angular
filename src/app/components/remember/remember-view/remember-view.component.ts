import { Component, OnInit } from '@angular/core';

import { PoPageAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-remember-view',
  templateUrl: './remember-view.component.html',
  styleUrls: ['./remember-view.component.css']
})
export class RememberViewComponent implements OnInit {

  readonly actions: Array<PoPageAction> = [
    // actions of table here
  ];

  readonly columns: Array<PoTableColumn> = [
    // columns of table here
    { property: 'name', width: '50%' },
    { property: 'age', width: '15%' },
    { property: 'email', width: '35%' }
  ];

  items: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      { name: 'John Doe', age: 33, email: 'johndoe@example.com' }
    ];
   }

}
