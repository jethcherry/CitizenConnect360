import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveUsersComponent } from './approve-users.component';

describe('ApproveUsersComponent', () => {
  let component: ApproveUsersComponent;
  let fixture: ComponentFixture<ApproveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
