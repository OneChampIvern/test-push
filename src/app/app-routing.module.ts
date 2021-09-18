import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { InputComponent } from './input/input.component';
import { OverViewComponent } from './over-view/over-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'quiz-input',
    pathMatch:'full'
  },
  {
    path:'quiz-input',
    component:InputComponent
  },
  {
    path:'quiz-overview',
    component:OverViewComponent
  },
  {
    path:'quiz-details',
    component:DetailsComponent
  },
  {
    path:'quiz-result',
    component:ResultComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
