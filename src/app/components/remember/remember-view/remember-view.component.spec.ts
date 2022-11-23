import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PoPageModule, PoInfoModule, PoTableModule } from '@po-ui/ng-components';

import { RememberViewComponent } from './remember-view.component';

describe('RememberViewComponent', () => {
  let component: RememberViewComponent;
  let fixture: ComponentFixture<RememberViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PoPageModule,
        PoInfoModule,
        PoTableModule
      ],
      declarations: [ RememberViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
