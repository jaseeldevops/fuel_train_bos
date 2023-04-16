import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPrefixComponent } from './document-prefix.component';

describe('DocumentPrefixComponent', () => {
  let component: DocumentPrefixComponent;
  let fixture: ComponentFixture<DocumentPrefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentPrefixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
