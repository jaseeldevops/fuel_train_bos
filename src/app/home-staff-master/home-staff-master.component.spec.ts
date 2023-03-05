import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStaffMasterComponent } from './home-staff-master.component';

describe('HomeStaffMasterComponent', () => {
  let component: HomeStaffMasterComponent;
  let fixture: ComponentFixture<HomeStaffMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStaffMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStaffMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
