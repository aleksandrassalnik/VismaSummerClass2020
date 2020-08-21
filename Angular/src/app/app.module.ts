import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';

//Modules
import { FormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';

//Services
import { FormDataService } from './form-data.service';
import { QuestionResourceService } from './question-resource.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    FormsModule
  ],
  providers: [FormDataService, QuestionResourceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
