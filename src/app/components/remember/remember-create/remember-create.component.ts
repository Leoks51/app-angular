import { Component, OnInit } from '@angular/core';
import { Remember } from '../remember.model';
import { RememberService } from '../remember.service';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';


@Component({
  selector: 'app-remember-create',
  templateUrl: './remember-create.component.html',
  styleUrls: ['./remember-create.component.scss']
})
export class RememberCreateComponent implements OnInit {

  remember: Remember = {
    description: '',
    date: ''
  }

  constructor(
    private rememberService: RememberService,
    private router: Router,
    private poNotification: PoNotificationService
    ) { }

  ngOnInit() {
  }
  create(): void{
    this.rememberService.create(this.remember).subscribe(() =>
    this.router.navigate(['/remembers'])),
    this.poNotification.success('Remember included successfully!')
  }

  cancel(){
    this.rememberService.cancel()
  }


}
