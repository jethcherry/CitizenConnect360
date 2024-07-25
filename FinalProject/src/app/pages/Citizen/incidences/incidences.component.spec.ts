import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidencesComponent } from './incidences.component';

describe('IncidencesComponent', () => {
  let component: IncidencesComponent;
  let fixture: ComponentFixture<IncidencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
