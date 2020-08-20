import { Injectable } from '@angular/core';
import { Question } from './iQuestion.interface';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  public data: Question;

  public get(question: Question) {
    this.data = question;
  }

  public clear() {
    this.data = null;
  }
}
