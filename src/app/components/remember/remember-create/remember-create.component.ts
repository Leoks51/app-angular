import { Component, OnInit } from '@angular/core';
import { RememberService } from '../remember.service';


@Component({
  selector: 'app-remember-create',
  templateUrl: './remember-create.component.html',
  styleUrls: ['./remember-create.component.scss']
})
export class RememberCreateComponent implements OnInit {

  constructor(private rememberService: RememberService) { }

  ngOnInit() {
  }
  create(){
    //this.rememberService.create()
  }

  cancel(){
    this.rememberService.cancel()
  }


}
