import { Component, OnInit } from '@angular/core';
import { QuestionResourceService } from '../question-resource.service';
import { Question } from '../iQuestion.interface';
import { FormDataService } from '../form-data.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  public questions: Question[];

  constructor(
    private questionService: QuestionResourceService,
    private formDataService: FormDataService
  ) { }
  
  public ngOnInit(): void {
    this.get();
  }

  private onSelect(question: Question): void {
    this.formDataService.get(question);
  }

  private get(): void {
    this.questionService
      .get().pipe(take(1))
      .subscribe((questions) => (this.questions = questions));
  }
}