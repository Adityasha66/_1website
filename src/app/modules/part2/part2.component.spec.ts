import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part2Component } from './part2.component';

describe('Part2Component', () => {
  let component: Part2Component;
  let fixture: ComponentFixture<Part2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part2Component]
    });
    fixture = TestBed.createComponent(Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
