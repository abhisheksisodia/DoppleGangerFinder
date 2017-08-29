import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }   from './main/main.component';
import { ResultsComponent }      from './results/results.component';

const routes: Routes = [
  { path: 'main',  component: MainComponent },
  { path: 'results',     component: ResultsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}