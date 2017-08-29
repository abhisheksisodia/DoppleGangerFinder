import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdProgressSpinnerModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { WebCamComponent } from 'ack-angular-webcam';
import { FaceService } from './services/face.service';
import { DbService } from './services/db.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    WebCamComponent,
    MainComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdProgressSpinnerModule
  ],
  providers: [FaceService, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
