import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentOfficialComponent } from './government-official.component';

describe('GovernmentOfficialComponent', () => {
  let component: GovernmentOfficialComponent;
  let fixture: ComponentFixture<GovernmentOfficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentOfficialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentOfficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
