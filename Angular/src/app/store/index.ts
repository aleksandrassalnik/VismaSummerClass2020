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
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const questionStateFeatureKey = 'questionState';

export interface QuestionState extends EntityState<Question> {
  error: any;
}

export const adapter: EntityAdapter<Question> = createEntityAdapter<Question>();

export const initialState = adapter.getInitialState({
  error: undefined,
});

export const reducers = createReducer(
  initialState,
  on(loadQuestionsSuccess, (state, action) => {
    return adapter.addAll(action.questions, state);
  }),
  on(loadQuestionsFail, (state, action) => {
    return {
      error: action.error,
    };
  })
);

export const selectQuestionsFeature = createFeatureSelector<QuestionState>(
  questionStateFeatureKey
);

export const selectQuestions = createSelector(
  selectQuestionsFeature,
  adapter.getSelectors().selectAll
);

export const selectError = createSelector(
  selectQuestionsFeature,
  (state: QuestionState) => state.error
);

export const metaReducers: MetaReducer<
  QuestionState
>[] = !environment.production ? [] : [];
