import { Component, OnInit } from '@angular/core';
import { Database } from '../databaseTemplate';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  data: Database;

  constructor(public formDataService: FormDataService) {}

  ngOnInit(): void {
    if (this.formDataService.data) this.data = this.formDataService.data;
    else this.data = {
      author: '',
      date: new Date(),
      title: '',
      content: '',
      tags: [],
      viewCount: 0,
      answerCount: 0,
      votesCount: 0
    };
  }

  ngOnDestroy(): void {
    this.formDataService.clear();
  }
}
