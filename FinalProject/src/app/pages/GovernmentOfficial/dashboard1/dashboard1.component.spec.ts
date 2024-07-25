import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard1Component } from './dashboard1.component';

describe('Dashboard1Component', () => {
  let component: Dashboard1Component;
  let fixture: ComponentFixture<Dashboard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
