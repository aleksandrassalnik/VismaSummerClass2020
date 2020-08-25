import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  createReducer,
  on,
  State,
} from '@ngrx/store';

import { Question } from '../iQuestion.interface';
import * as questionActions from './question.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action } from 'rxjs/internal/scheduler/Action';

export const questionStateFeatureKey = 'questionState';

export interface QuestionState extends EntityState<Question> {
  error: any;
  selectedQuestion: Question;
}

export const adapter: EntityAdapter<Question> = createEntityAdapter<Question>();

export const initialState: QuestionState = adapter.getInitialState({
  error: undefined,
  selectedQuestion: undefined,
});

export const reducers = createReducer(
  initialState,
  on(questionActions.loadQuestionsSuccess, (state, action) => {
    return adapter.addAll(action.questions, state);
  }),
  on(questionActions.loadQuestionsFail, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(questionActions.addQuestionSuccess, (state, action) => {
    return adapter.addOne(action.question, state);
  }),
  on(questionActions.addQuestionFail, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(questionActions.loadQuestionSuccess, (state, action) => {
    return {
      ...state,
      selectedQuestion: action.selectedQuestion,
    };
  }),
  on(questionActions.loadQuestionFail, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(questionActions.updateQuestion, (state, action) => {
    return adapter.updateOne(action.question, state);
  }),
  on(questionActions.deleteQuestion, (state, action) => {
    return adapter.removeOne(action.id, state);
  })
);
