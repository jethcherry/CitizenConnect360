import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatgptComponent } from './chatgpt.component';

describe('ChatgptComponent', () => {
  let component: ChatgptComponent;
  let fixture: ComponentFixture<ChatgptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatgptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatgptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
