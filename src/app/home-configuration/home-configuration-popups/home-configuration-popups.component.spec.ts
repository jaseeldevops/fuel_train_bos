import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConfigurationPopupsComponent } from './home-configuration-popups.component';

describe('HomeConfigurationPopupsComponent', () => {
  let component: HomeConfigurationPopupsComponent;
  let fixture: ComponentFixture<HomeConfigurationPopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeConfigurationPopupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeConfigurationPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
