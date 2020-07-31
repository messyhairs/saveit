import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
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
    BrowserAnimationsModule,
    HttpClientModule,
    LazyLoadImageModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
