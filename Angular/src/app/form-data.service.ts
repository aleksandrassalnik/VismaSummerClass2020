import { Injectable } from '@angular/core';
import { Database } from './databaseTemplate';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  data: Database;

  get(question: Database) {
    this.data = question;
  }

  clear() {
    this.data = null;
  }

  constructor() {}
}
