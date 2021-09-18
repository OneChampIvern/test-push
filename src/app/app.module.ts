import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OverViewComponent } from './over-view/over-view.component';
import { DetailsComponent } from './details/details.component';
import { ResultComponent } from './result/result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { QuizzSerciveService } from './service/quizz-sercive.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OverViewComponent,
    DetailsComponent,
    ResultComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [QuizzSerciveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
