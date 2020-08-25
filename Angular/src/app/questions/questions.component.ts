import { Component, OnInit } from '@angular/core';
import { QuestionResourceService } from '../question-resource.service';
import { Question } from '../iQuestion.interface';
import { QuestionState, selectQuestions } from '../store';
import { Store, select } from '@ngrx/store';
import * as questionActions from '../store/question.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  //public questions: Question[];
  questions$: Observable<Question[]>;

  constructor(
    private questionService: QuestionResourceService,
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
