import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Question } from '../iQuestion.interface';
import { loadQuestionsSuccess, loadQuestionsFail } from './question.actions';

export const questionStateFeatureKey = 'questionState';

export interface QuestionState {
  questions: Question[];
  error: any;
}

export const initialState: QuestionState = {
  questions: undefined,
  error: undefined,
};

export const reducers = createReducer(
  initialState,
  on(loadQuestionsSuccess, (state, action) => {
    return {
      questions: action.questions,
    };
  }),
  on(loadQuestionsFail, (state, action) => {
    return {
        questions: state.questions,
        error: action.error
    };
  })
);

export const metaReducers: MetaReducer<
  QuestionState
>[] = !environment.production ? [] : [];
