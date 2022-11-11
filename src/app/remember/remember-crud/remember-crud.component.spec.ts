import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberCrudComponent } from './remember-crud.component';

describe('RememberCrudComponent', () => {
  let component: RememberCrudComponent;
  let fixture: ComponentFixture<RememberCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememberCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RememberCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
