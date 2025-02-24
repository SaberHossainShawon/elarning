import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseformComponent } from './courseform.component';

describe('CourseformComponent', () => {
  let component: CourseformComponent;
  let fixture: ComponentFixture<CourseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
