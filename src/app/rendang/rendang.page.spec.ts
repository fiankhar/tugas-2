import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendangPage } from './rendang.page';

describe('RendangPage', () => {
  let component: RendangPage;
  let fixture: ComponentFixture<RendangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
