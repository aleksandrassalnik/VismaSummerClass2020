import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../iQuestion.interface';
import { QuestionResourceService } from '../question-resource.service';
import { take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  private questionId = this.route.snapshot.paramMap.get('id');
  private date = new Date();
  public maxDate = new Date(
    `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${
      this.date.getDate() + 1
    }`
  )
    .toISOString()
    .slice(0, 10);

  @Input() data: Question = {
    author: '',
    title: '',
    date: null,
    content: '',
    tags: [],
    viewCount: 0,
    answerCount: 0,
    votesCount: 0,
    id: null,
  };

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionResourceService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    if (this.questionId) {
      this.getFormData(this.questionId);
    }
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

  private getFormData(id): void {
    this.questionService
      .get(id)
      .pipe(take(1))
      .subscribe((questions) => (this.data = Object.assign(questions)));
  }
}
