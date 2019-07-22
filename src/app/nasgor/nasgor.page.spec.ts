import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasgorPage } from './nasgor.page';

describe('NasgorPage', () => {
  let component: NasgorPage;
  let fixture: ComponentFixture<NasgorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasgorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasgorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
