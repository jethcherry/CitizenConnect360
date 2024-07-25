import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducateComponent } from './educate.component';

describe('EducateComponent', () => {
  let component: EducateComponent;
  let fixture: ComponentFixture<EducateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
