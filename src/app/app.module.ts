import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddstoryComponent } from './components/addstory/addstory.component';
import { GetstoryComponent } from './components/getstory/getstory.component';
import { UpudatestoryComponent } from './components/upudatestory/upudatestory.component';
import { ReadfullstoryComponent } from './components/readfullstory/readfullstory.component';

@NgModule({
  declarations: [
    AppComponent,
    AddstoryComponent,
    GetstoryComponent,
    UpudatestoryComponent,
    ReadfullstoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
