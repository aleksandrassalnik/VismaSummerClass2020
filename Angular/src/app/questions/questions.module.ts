import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromQuestionState from '../store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromQuestionState.questionStateFeatureKey,
      fromQuestionState.reducers,
      { metaReducers: fromQuestionState.metaReducers }
    ),
  ],
})
export class QuestionsModule {}
