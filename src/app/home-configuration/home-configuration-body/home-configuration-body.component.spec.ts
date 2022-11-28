import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConfigurationBodyComponent } from './home-configuration-body.component';

describe('HomeConfigurationBodyComponent', () => {
  let component: HomeConfigurationBodyComponent;
  let fixture: ComponentFixture<HomeConfigurationBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeConfigurationBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeConfigurationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
