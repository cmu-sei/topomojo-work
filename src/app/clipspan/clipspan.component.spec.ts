// Copyright 2021 Carnegie Mellon University.
// Released under a 3 Clause BSD-style license. See LICENSE.md in the project root.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipspanComponent } from './clipspan.component';

describe('ClipspanComponent', () => {
  let component: ClipspanComponent;
  let fixture: ComponentFixture<ClipspanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipspanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipspanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
