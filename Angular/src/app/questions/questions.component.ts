import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Database } from '../databaseTemplate';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions: Database[];

  onSelect(question: Database): void {
    this.formDataService.get(question);
  }

  get(): void {
    this.restService
      .get()
      .subscribe((questions) => (this.questions = questions));
  }

  constructor(
    private restService: RestService,
    private formDataService: FormDataService
  ) {}

  ngOnInit(): void {
    this.get();
  }
}
