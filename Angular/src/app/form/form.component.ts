import { Component, OnInit, Input } from '@angular/core';
import { Database } from '../databaseTemplate';
import { FormDataService } from '../form-data.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() data: Database;

  constructor(
    private restService: RestService,
    public formDataService: FormDataService
  ) {}

  ngOnInit(): void {
    if (this.formDataService.data) this.data = this.formDataService.data;
    else
      this.data = {
        author: '',
        date: new Date(),
        title: '',
        content: '',
        tags: [],
        viewCount: 0,
        answerCount: 0,
        votesCount: 0,
        id: null,
      };
  }

  save(): void {
    this.restService.put(this.data);
  }

  ngOnDestroy(): void {
    this.formDataService.clear();
  }
}
