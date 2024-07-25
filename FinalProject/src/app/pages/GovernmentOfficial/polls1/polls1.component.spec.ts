import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polls1Component } from './polls1.component';

describe('Polls1Component', () => {
  let component: Polls1Component;
  let fixture: ComponentFixture<Polls1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Polls1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polls1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
