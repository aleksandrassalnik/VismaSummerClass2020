import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import {
  QuestionState,
  questionStateFeatureKey,
  selectAll,
} from './question.reducers';

export const selectQuestionsFeature = createFeatureSelector<QuestionState>(
  questionStateFeatureKey
);

export const selectQuestions = createSelector(
  selectQuestionsFeature,
  selectAll
);

export const selectNewQuestions = createSelector(
  selectQuestionsFeature,
  (data) => {
    const dateNow = new Date().toISOString().slice(0, 10);
    const question = Object.values(data.entities);
    return question.filter((question) => {
      if (new Date(question.date).toISOString().slice(0, 10) === dateNow) {
        return question;
      }
    });
  }
);

export const selectedQuestion = createSelector(
  selectQuestionsFeature,
  (state: QuestionState) => state.selectedQuestion
);

export const selectError = createSelector(
  selectQuestionsFeature,
  (state: QuestionState) => state.error
);
