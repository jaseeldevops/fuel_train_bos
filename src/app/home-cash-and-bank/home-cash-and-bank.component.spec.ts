import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCashAndBankComponent } from './home-cash-and-bank.component';

describe('HomeCashAndBankComponent', () => {
  let component: HomeCashAndBankComponent;
  let fixture: ComponentFixture<HomeCashAndBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCashAndBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCashAndBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
