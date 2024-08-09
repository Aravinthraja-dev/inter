import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskWorkComponent } from './task-work.component';

describe('TaskWorkComponent', () => {
  let component: TaskWorkComponent;
  let fixture: ComponentFixture<TaskWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
