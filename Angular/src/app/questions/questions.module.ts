import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
})
export class QuestionsModule {}
