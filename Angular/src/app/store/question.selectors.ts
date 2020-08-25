import {
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
  QuestionState,
  questionStateFeatureKey,
  adapter,
} from './question.reducers';

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
);

export const selectError = createSelector(
  selectQuestionsFeature,
  (state: QuestionState) => state.error
);

export const metaReducers: MetaReducer<QuestionState>[] = !environment.production ? [] : [];
