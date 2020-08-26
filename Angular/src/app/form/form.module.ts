import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromQuestionState from '../store/question.reducers';
import { EffectsModule } from '@ngrx/effects';
import { QuestionEffects } from '../store/question.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromQuestionState.questionStateFeatureKey,
      fromQuestionState.reducers
    ),
    EffectsModule.forFeature([QuestionEffects])
  ]
})
export class FormModule { }
