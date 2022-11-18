import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMonitoringComponent } from './home-monitoring.component';

describe('HomeMonitoringComponent', () => {
  let component: HomeMonitoringComponent;
  let fixture: ComponentFixture<HomeMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
