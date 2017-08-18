import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionaireComponent } from './create-questionaire.component';

describe('CreateQuestionaireComponent', () => {
  let component: CreateQuestionaireComponent;
  let fixture: ComponentFixture<CreateQuestionaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuestionaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
