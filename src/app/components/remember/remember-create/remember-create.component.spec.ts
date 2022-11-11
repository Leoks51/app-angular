import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberCreateComponent } from './remember-create.component';

describe('RememberCreateComponent', () => {
  let component: RememberCreateComponent;
  let fixture: ComponentFixture<RememberCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememberCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RememberCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
