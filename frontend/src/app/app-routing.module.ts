import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './layout/container/container.component';
import { QuizMakerComponent } from './components/quiz-maker/quiz-maker.component';
import { AnswerRouteComponent } from './components/answer-route/answer-route.component';
import { QuizListComponent } from './components/quiz-list-route/quiz-list-route.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
  }, {
    path: 'crear',
    component: QuizMakerComponent
  },
  {
    path: 'responder',
    component: QuizListComponent
  },
  {
    path: 'responder/:id',
    component: AnswerRouteComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
