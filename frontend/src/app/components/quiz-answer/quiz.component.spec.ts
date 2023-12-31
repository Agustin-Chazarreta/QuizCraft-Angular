import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAnswerComponent } from './quiz.component';

describe('QuizComponent', () => {
  let component: QuizAnswerComponent;
  let fixture: ComponentFixture<QuizAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizAnswerComponent]
    });
    fixture = TestBed.createComponent(QuizAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
