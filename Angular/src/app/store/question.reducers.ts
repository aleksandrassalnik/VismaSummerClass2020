import { createReducer, on } from '@ngrx/store';
import { Question } from '../iQuestion.interface';
import * as questionActions from './question.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

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
  on(questionActions.loadQuestionsSuccess, (state, { questions }) => {
    return adapter.setAll(questions, state);
  }),
  on(questionActions.addQuestionSuccess, (state, { question }) => {
    return adapter.setOne(question, state);
  }),
  on(questionActions.loadQuestionSuccess, (state, { selectedQuestion }) => {
    return {
      ...state,
      selectedQuestion: selectedQuestion,
    };
  }),
  on(questionActions.updateQuestion, (state, { question }) => {
    return adapter.updateOne(question, state);
  }),
  on(questionActions.deleteQuestionSuccess, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(
    questionActions.deleteQuestionFail,
    questionActions.loadQuestionFail,
    questionActions.addQuestionFail,
    questionActions.loadQuestionsFail,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);

export const { selectAll } = adapter.getSelectors();
