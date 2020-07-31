import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstoryComponent } from './components/addstory/addstory.component';
import { GetstoryComponent } from './components/getstory/getstory.component';
import { UpudatestoryComponent } from './components/upudatestory/upudatestory.component';
import { ReadfullstoryComponent } from './components/readfullstory/readfullstory.component';

const routes: Routes = [
  {
    path: 'addstory', component: AddstoryComponent
  },
  {
    path: 'getstory', component: GetstoryComponent
  },
  {
    path: 'edit/:id', component: UpudatestoryComponent
  },
  {
    path: 'fullstory/:id', component: ReadfullstoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
