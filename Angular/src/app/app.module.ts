import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';
import { RightSideMenuComponent } from './right-side-menu/right-side-menu.component';
import { QuestionsComponent } from './questions/questions.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftSideMenuComponent,
    RightSideMenuComponent,
    QuestionsComponent,
    FormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
