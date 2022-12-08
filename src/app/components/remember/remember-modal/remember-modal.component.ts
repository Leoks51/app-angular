import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { Remember } from '../remember.model';
import { RememberService } from '../remember.service';

@Component({
  selector: 'app-remember-modal',
  templateUrl: './remember-modal.component.html',
  styleUrls: ['./remember-modal.component.scss']
})
export class RememberModalComponent implements OnInit {
    remember: Remember = {
    description: '',
    date: ''
  }

  constructor(
    private rememberService: RememberService,
    private router: Router,
    private route: ActivatedRoute,
    private poNotification: PoNotificationService
    ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.rememberService.readById(id!).subscribe(remember =>{
      this.remember = remember
    });
  }

  update(){
    this.rememberService.update(this.remember).subscribe(() =>{
    this.poNotification.success('Remember included successfully!')
    this.router.navigate(['/remembers'])
    })
  }

  cancel():void {
    this.router.navigate(['/remembers'])
  }
}
