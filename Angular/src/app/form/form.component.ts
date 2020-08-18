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
    this.data = this.formDataService.data;
  }

  ngOnDestroy(): void {
    this.formDataService.clear();
  }
}
