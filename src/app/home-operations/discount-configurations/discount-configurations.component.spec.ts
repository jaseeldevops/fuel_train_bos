import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountConfigurationsComponent } from './discount-configurations.component';

describe('DiscountConfigurationsComponent', () => {
  let component: DiscountConfigurationsComponent;
  let fixture: ComponentFixture<DiscountConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountConfigurationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
