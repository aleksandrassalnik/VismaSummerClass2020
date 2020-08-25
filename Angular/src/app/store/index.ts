import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  State,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
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
  selectedQuestion: undefined
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
    return adapter.addOne(action.question, state)
  }),
  on(questionActions.addQuestionFail, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  })
);

export const selectQuestionsFeature = createFeatureSelector<QuestionState>(
  questionStateFeatureKey
);

export const selectQuestions = createSelector(
  selectQuestionsFeature,
  adapter.getSelectors().selectAll
);
export const selectedQuestion = createSelector(
  selectQuestionsFeature,
  (state: QuestionState) => state.selectedQuestion
)

export const selectError = createSelector(
  selectQuestionsFeature,
  (state: QuestionState) => state.error
);

export const metaReducers: MetaReducer<
  QuestionState
>[] = !environment.production ? [] : [];
