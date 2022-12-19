import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remember-crud',
  templateUrl: './remember-crud.component.html',
  styleUrls: ['./remember-crud.component.scss']
})
export class RememberCrudComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
