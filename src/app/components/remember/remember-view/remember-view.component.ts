import { Component, OnInit } from '@angular/core';

import { PoPageAction, PoPageFilter, PoTableColumn } from '@po-ui/ng-components';
import { Remember } from '../remember.model';
import { RememberService } from '../remember.service';

@Component({
  selector: 'app-remember-view',
  templateUrl: './remember-view.component.html',
  styleUrls: ['./remember-view.component.css']
})
export class RememberViewComponent implements OnInit {

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    placeholder: 'Search'
  };

  readonly actions: Array<PoPageAction> = [
    { label: 'Apagar', action: this.deleteRemember.bind(this) },
  ];

  readonly columns: Array<PoTableColumn> = [
    // columns of table here
    { property: 'id', width: '15%' },
    { property: 'description', width: '50%' },
    { property: 'date', width: '35%' }
  ];

  remembers: Remember[] = [];

  constructor(private rememberService: RememberService) { }

  ngOnInit(): void {
    this.rememberService.read().subscribe(remembers => {
      this.remembers = remembers
     // console.log(remembers)
    })
  }
  deleteRemember() {
    this.rememberService.delete();
    console.log('deletou')


  }

  filter() {
    const filters = this.remembers.map(remembers => remembers);
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.filter();
  }
}
