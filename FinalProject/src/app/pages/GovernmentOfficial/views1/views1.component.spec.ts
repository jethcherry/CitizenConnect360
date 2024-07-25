import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Views1Component } from './views1.component';

describe('Views1Component', () => {
  let component: Views1Component;
  let fixture: ComponentFixture<Views1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Views1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Views1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
