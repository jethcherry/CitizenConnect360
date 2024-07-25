import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsComponent } from './polls.component';

describe('PollsComponent', () => {
  let component: PollsComponent;
  let fixture: ComponentFixture<PollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
