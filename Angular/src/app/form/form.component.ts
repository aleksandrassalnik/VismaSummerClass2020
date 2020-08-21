import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../iQuestion.interface';
import { FormDataService } from '../form-data.service';
import { QuestionResourceService } from '../question-resource.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  private getData = this.formDataService.data;
  private date = new Date();
  public maxDate = new Date(
    `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${
      this.date.getDate() + 1
    }`
  )
    .toISOString()
    .slice(0, 10);

  @Input() data: Question;

  constructor(
    private questionService: QuestionResourceService,
    private formDataService: FormDataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getFormData();
  }

  public save(): void {
    this.data.tags = JSON.parse(`[${this.data.tags}]`);
    if (this.data.id) {
      this.questionService
        .put(this.data)
        .pipe(take(1))
        .subscribe(() => {
          this.router.navigateByUrl('/');
        });
    } else
      this.questionService
        .post(this.data)
        .pipe(take(1))
        .subscribe(() => {
          this.router.navigateByUrl('/');
        });
  }

  private delete(): void {
    this.questionService
      .delete(this.data.id)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }

  public ngOnDestroy(): void {
    this.formDataService.clear();
  }

  private getFormData(): void {
    this.data = {
      author: this.getData ? this.getData.author : '',
      title: this.getData ? this.getData.title : '',
      date: this.getData ? this.getData.date : null,
      content: this.getData ? this.getData.content : '',
      tags: this.getData ? this.getData.tags : [],
      viewCount: this.getData ? this.getData.viewCount : 0,
      answerCount: this.getData ? this.getData.answerCount : 0,
      votesCount: this.getData ? this.getData.votesCount : 0,
      id: this.getData ? this.getData.id : null,
    };
  }
}
