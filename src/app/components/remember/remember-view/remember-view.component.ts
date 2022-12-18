import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    { label: 'Editar', action: this.toRememberEdit.bind(this) },
  ];

  readonly columns: Array<PoTableColumn> = [
    // columns of table here
    { property: 'id', width: '15%' },
    { property: 'description', width: '50%' },
    { property: 'date', width: '35%' }
  ];

  remembers: Remember[] = [];
  remember: any;



  constructor(private rememberService: RememberService, private router: Router) { }

  ngOnInit(): void {
    this.rememberService.read().subscribe(remembers => {
      this.remembers = remembers
     // console.log(remembers)
    })
  }


  toRememberEdit(): void{
    this.router.navigate(['/remembers/edit/:id'])
 }

 deleteRemember(remember: Remember): void {
  this.remembers = this.remembers.filter(r => r !== remember);
  this.rememberService
    .delete(remember.id)
    .subscribe();
  /*
  // oops ... subscribe() is missing so nothing happens
  this.heroesService.deleteHero(hero.id);
  */
}

  /*deleteRemember(): void {
    this.rememberService.delete(this.remember.id).subscribe(() => {
      this.rememberService.showMessage("Produto excluido com sucesso!");
    });
  }*/

  filter() {
    const filters = this.remembers.map(remembers => remembers);
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.filter();
  }
}
