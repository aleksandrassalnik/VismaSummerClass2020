import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideMenuComponent } from '../left-side-menu/left-side-menu.component';
import { RightSideMenuComponent } from '../right-side-menu/right-side-menu.component';
import { QuestionsComponent } from '../questions/questions.component';
import { QuestionsModule } from '../questions/questions.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    NavbarComponent,
    LeftSideMenuComponent,
    RightSideMenuComponent,
    QuestionsComponent,
  ],
  imports: [CommonModule, QuestionsModule, AppRoutingModule],
  exports: [
    NavbarComponent,
    LeftSideMenuComponent,
    RightSideMenuComponent,
    QuestionsComponent,
  ],
})
export class MainModule {}
