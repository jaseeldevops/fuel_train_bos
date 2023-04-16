import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditingInformationComponent } from './auditing-information.component';

describe('AuditingInformationComponent', () => {
  let component: AuditingInformationComponent;
  let fixture: ComponentFixture<AuditingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditingInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
