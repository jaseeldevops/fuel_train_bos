import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePagingComponent } from './table-paging.component';

describe('TablePagingComponent', () => {
  let component: TablePagingComponent;
  let fixture: ComponentFixture<TablePagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
