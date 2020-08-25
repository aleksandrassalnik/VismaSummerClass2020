import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuestionResourceService } from '../question-resource.service';
import * as fromQuestionActions from './question.actions';

@Injectable()
export class QuestionEffects {
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromQuestionActions.loadQuestions),
      mergeMap(() =>
        this.questionResourceService.get().pipe(
          map((questions) =>
            fromQuestionActions.loadQuestionsSuccess({ questions })
          ),
          catchError((error) =>
            of(fromQuestionActions.loadQuestionsFail({ error }))
          )
        )
      )
    )
  );

  createQuestion$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromQuestionActions.addQuestion),
      mergeMap((action) =>
        this.questionResourceService.post(action.question).pipe(
          map((question) =>
            fromQuestionActions.addQuestionSuccess({ question })
          ),
          catchError((error) =>
            of(fromQuestionActions.addQuestionFail({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private questionResourceService: QuestionResourceService
  ) {}
}
