import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalAccountComponent } from './local-account.component';

describe('LocalAccountComponent', () => {
  let component: LocalAccountComponent;
  let fixture: ComponentFixture<LocalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
