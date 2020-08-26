import { Component, OnInit } from '@angular/core';
import { Question } from '../iQuestion.interface';
import { QuestionState } from '../store/question.reducers';
import { selectQuestions } from '../store/question.selectors';
import { Store, select } from '@ngrx/store';
import * as questionActions from '../store/question.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
  
export class QuestionsComponent implements OnInit {
  questions$: Observable<Question[]>;

  constructor(
    private store: Store<QuestionState>
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(questionActions.loadQuestions());
    this.loadQuestions();
  }

  loadQuestions() {
    this.questions$ = this.store.pipe(select(selectQuestions));
  }
}
