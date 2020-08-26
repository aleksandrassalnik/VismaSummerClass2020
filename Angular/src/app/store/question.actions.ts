import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Question } from '../iQuestion.interface';

//Load questions
export const loadQuestions = createAction(
  '[Questions Component] Load Questions'
);
export const loadQuestionsSuccess = createAction(
  '[Questions Effect] Load Questions Success',
  props<{ questions: Question[] }>()
);
export const loadQuestionsFail = createAction(
  '[Questions Effect] Load Questions Fail',
  props<{ error: any }>()
);

//Load new Questions
export const loadNewQuestions = createAction(
  '[Questions Component] Load New Questions'
);
export const loadNewQuestionsSuccess = createAction(
  '[Questions Effect] Load New Questions Success',
  props<{ questions: Question[] }>()
);
export const loadNewQuestionsFail = createAction(
  '[Questions Effect] Load New Questions Fail',
  props<{ error: any }>()
);

//Load question
export const loadQuestion = createAction(
  '[Form Component] Load Question',
  props<{ id: string }>()
);
export const loadQuestionSuccess = createAction(
  '[Form Effect] Load Question Success',
  props<{ selectedQuestion: Question }>()
);
export const loadQuestionFail = createAction(
  '[Form Effect] Load Question Fail',
  props<{ error: any }>()
);

//Add question
export const addQuestion = createAction(
  '[Form Component] Add Question',
  props<{ question: Question }>()
);
export const addQuestionSuccess = createAction(
  '[Form Effect] Add Question Success',
  props<{ question: Question }>()
);
export const addQuestionFail = createAction(
  '[Form Effect] Add Question Fail',
  props<{ error: any }>()
);

//Edit question
export const updateQuestion = createAction(
  '[Form Component] Update Question',
  props<{ question: Update<Question> }>()
);

//Delete question
export const deleteQuestion = createAction(
  '[Form Component] Delete Question',
  props<{ id: string }>()
);

export const deleteQuestionSuccess = createAction(
  '[Form Component] Delete Question Success',
  props<{ id: string }>()
);

export const deleteQuestionFail = createAction(
  '[Form Component] Delete Question Fail',
  props<{ error: any }>()
);
