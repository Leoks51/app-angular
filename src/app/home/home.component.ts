import { Component, OnInit } from '@angular/core';
import { Remember } from '../components/remember/remember.model';
import { RememberService } from '../components/remember/remember.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  remembers: Remember[] = [];



  constructor(private rememberService: RememberService) { }

  ngOnInit(): void {
    this.rememberService.read().subscribe(remembers => {
      this.remembers = remembers
     // console.log(remembers)
    })
  }

}
