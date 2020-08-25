import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

//Components
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';

//Modules
import { FormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';
import { FormModule } from './form/form.module';
//Services
import { QuestionResourceService } from './question-resource.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, FormComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    FormsModule,
    FormModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [QuestionResourceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
