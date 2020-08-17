import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Database } from '../databaseTemplate';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: Database[];

  get(): void {
    this.restService.get().subscribe((questions) => (this.questions = questions));
  }

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.get();
  }

}
