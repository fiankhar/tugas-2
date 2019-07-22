import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyamPage } from './ayam.page';

describe('AyamPage', () => {
  let component: AyamPage;
  let fixture: ComponentFixture<AyamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
