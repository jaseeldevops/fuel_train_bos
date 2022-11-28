import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOperationsBodyComponent } from './home-operations-body.component';

describe('HomeOperationsBodyComponent', () => {
  let component: HomeOperationsBodyComponent;
  let fixture: ComponentFixture<HomeOperationsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOperationsBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOperationsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
