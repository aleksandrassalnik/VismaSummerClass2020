import { Component, OnInit } from '@angular/core';
import { QuestionResourceService } from '../question-resource.service';
import { Question } from '../iQuestion.interface';
import { take } from 'rxjs/operators';
import { QuestionState } from '../store';
import { Store } from '@ngrx/store';
import * as questionActions from '../store/question.actions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  public questions: Question[];

  constructor(
    private questionService: QuestionResourceService,
    private store: Store<QuestionState>
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(questionActions.loadQuestions());
    this.loadQuestions();
  }

  loadQuestions() {
    const questionsObserver = {
      next: (questions) => {
        this.store.dispatch(
          questionActions.loadQuestionsSuccess({ questions: questions })
        );
        this.questions = questions;
      },
      error: (err) => {
        this.store.dispatch(questionActions.loadQuestionsFail({ error: err }));
        console.log(err);
      },
    };

    this.questionService.get().subscribe(questionsObserver);
  }
}
