import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenuItem, ButtonModule, SlideMenuModule, ListboxModule,
ChartModule, BreadcrumbModule, DataGridModule, InputTextareaModule,
InputTextModule, CheckboxModule, GrowlModule, DropdownModule} from 'primeng/primeng';
import {RouterModule} from '@angular/router';
import {appRouter} from './app.router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateQuestionaireComponent } from './create-questionaire/create-questionaire.component';
import { MyQuestionaireComponent } from './my-questionaire/my-questionaire.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PreQuestionaireComponent } from './pre-questionaire/pre-questionaire.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionaireComponent,
    MyQuestionaireComponent,
    StatisticsComponent,
    PreQuestionaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlideMenuModule,
    ListboxModule,
    ChartModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    CheckboxModule,
    DataGridModule,
    GrowlModule,
    DropdownModule,
    BreadcrumbModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
