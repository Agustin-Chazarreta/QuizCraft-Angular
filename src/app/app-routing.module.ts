import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './layout/container/container.component';
import { QuizMakerComponent } from './components/quiz-maker/quiz-maker.component';
const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
  }, {
    path: 'create',
    component: QuizMakerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
