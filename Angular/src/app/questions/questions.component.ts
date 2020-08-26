import { Component, OnInit } from '@angular/core';
import { Question } from '../iQuestion.interface';
import { QuestionState } from '../store/question.reducers';
import { selectNewQuestions, selectQuestions } from '../store/question.selectors';
import { Store, select } from '@ngrx/store';
import * as questionActions from '../store/question.actions';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
  
export class QuestionsComponent implements OnInit {
  questions$: Observable<Question[]>;

  constructor(
    private store: Store<QuestionState>,
    private route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    if (this.route.snapshot.routeConfig.path === 'main')
    {
      this.store.dispatch(questionActions.loadQuestions());
      this.questions$ = this.store.pipe(select(selectQuestions));
    }
    else {
      this.store.dispatch(questionActions.loadQuestions());
      this.questions$ = this.store.pipe(select(selectNewQuestions));
    }
  }
}
