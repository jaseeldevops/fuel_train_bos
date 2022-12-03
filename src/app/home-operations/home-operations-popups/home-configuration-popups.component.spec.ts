import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOperationsPopupsComponent } from './home-operations-popups.component';

describe('HomeOperationsPopupsComponent', () => {
  let component: HomeOperationsPopupsComponent;
  let fixture: ComponentFixture<HomeOperationsPopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOperationsPopupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOperationsPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
