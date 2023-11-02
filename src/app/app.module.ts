import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz-answer/quiz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizMakerComponent } from './components/quiz-maker/quiz-maker.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ContainerComponent } from './layout/container/container.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './components/shared/button/button.component';
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizMakerComponent,
    FooterComponent,
    ContainerComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    CommonModule,
    NavigationComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
