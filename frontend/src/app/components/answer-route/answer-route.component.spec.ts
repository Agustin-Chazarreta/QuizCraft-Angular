import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerRouteComponent } from './answer-route.component';

describe('AnswerRouteComponent', () => {
  let component: AnswerRouteComponent;
  let fixture: ComponentFixture<AnswerRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerRouteComponent]
    });
    fixture = TestBed.createComponent(AnswerRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
