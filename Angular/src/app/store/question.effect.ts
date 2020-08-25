import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, concatMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuestionResourceService } from '../question-resource.service';
import * as fromQuestionActions from './question.actions';
import { Router } from '@angular/router';

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
      ),
      tap(() => this.router.navigateByUrl('/'))
    )
  );

  loadQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromQuestionActions.loadQuestion),
      mergeMap((action) =>
        this.questionResourceService.get(action.id).pipe(
          map((question) =>
            fromQuestionActions.loadQuestionSuccess({
              selectedQuestion: Object.assign(question),
            })
          ),
          catchError((error) =>
            of(fromQuestionActions.loadQuestionFail({ error }))
          )
        )
      )
    )
  );

  updateQuestion$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromQuestionActions.updateQuestion),
      concatMap(action => 
        this.questionResourceService.put(action.question.changes)
      ),
      tap(() => this.router.navigateByUrl('/'))
    ),{ dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private questionResourceService: QuestionResourceService,
    private router: Router
  ) {}
}
