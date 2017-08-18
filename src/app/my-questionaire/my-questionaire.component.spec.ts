import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuestionaireComponent } from './my-questionaire.component';

describe('MyQuestionaireComponent', () => {
  let component: MyQuestionaireComponent;
  let fixture: ComponentFixture<MyQuestionaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQuestionaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
