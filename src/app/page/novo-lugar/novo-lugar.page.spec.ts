import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoLugarPage } from './novo-lugar.page';

describe('NovoLugarPage', () => {
  let component: NovoLugarPage;
  let fixture: ComponentFixture<NovoLugarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoLugarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoLugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
