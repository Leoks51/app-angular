import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberModalComponent } from './remember-modal.component';

describe('RememberModalComponent', () => {
  let component: RememberModalComponent;
  let fixture: ComponentFixture<RememberModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememberModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RememberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
