import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz-answer/quiz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizMakerComponent } from './components/quiz-maker/quiz-maker.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizMakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
