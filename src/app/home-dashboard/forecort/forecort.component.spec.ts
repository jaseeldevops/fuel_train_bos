import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecortComponent } from './forecort.component';

describe('ForecortComponent', () => {
  let component: ForecortComponent;
  let fixture: ComponentFixture<ForecortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
