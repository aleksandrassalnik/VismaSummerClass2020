import { Component, OnInit, Input } from '@angular/core';
import { Database } from '../databaseTemplate';
import { FormDataService } from '../form-data.service';
import { RestService } from '../rest.service';
import { VirtualTimeScheduler } from 'rxjs';

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
    this.data.tags = JSON.parse(`[${this.data.tags}]`);
    if (this.data.id) {
      this.restService.put(this.data).subscribe();
    } else this.restService.post(this.data).subscribe();
  }

  delete(): void {
    this.restService.delete(this.data.id).subscribe();
  }

  ngOnDestroy(): void {
    this.formDataService.clear();
  }
}
