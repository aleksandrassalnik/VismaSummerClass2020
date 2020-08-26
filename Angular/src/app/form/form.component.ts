import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../iQuestion.interface';
import { ActivatedRoute } from '@angular/router';
import { QuestionState } from '../store/question.reducers';
import { Store, select } from '@ngrx/store';
import {
  addQuestion,
  loadQuestion,
  updateQuestion,
  deleteQuestion
} from '../store/question.actions';
import { selectedQuestion } from '../store/question.selectors';
import { Update } from '@ngrx/entity';

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
    private store: Store<QuestionState>
  ) {}

  public ngOnInit(): void {
    if (this.questionId) {
      this.store.dispatch(loadQuestion({ id: this.questionId }));
      this.store
        .pipe(select(selectedQuestion))
        .subscribe(
          (question) => (this.data = Object.assign(new Question(), question))
        );
    }
  }

  public save(): void {
    this.data.tags = JSON.parse(`[${this.data.tags}]`);
    if (this.data.id) {
      const update: Update<Question> = {
        id: this.data.id,
        changes: this.data,
      };
      this.store.dispatch(updateQuestion({ question: update }));
    } else this.store.dispatch(addQuestion({ question: this.data }));
  }

  private delete(): void {
    this.store.dispatch(deleteQuestion({ id: JSON.stringify(this.data.id) }))
  }
}
