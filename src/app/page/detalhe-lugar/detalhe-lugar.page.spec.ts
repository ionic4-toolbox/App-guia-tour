import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheLugarPage } from './detalhe-lugar.page';

describe('DetalheLugarPage', () => {
  let component: DetalheLugarPage;
  let fixture: ComponentFixture<DetalheLugarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheLugarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheLugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
