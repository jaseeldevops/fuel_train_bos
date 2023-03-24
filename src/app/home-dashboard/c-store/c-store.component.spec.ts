import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CStoreComponent } from './c-store.component';

describe('CStoreComponent', () => {
  let component: CStoreComponent;
  let fixture: ComponentFixture<CStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
