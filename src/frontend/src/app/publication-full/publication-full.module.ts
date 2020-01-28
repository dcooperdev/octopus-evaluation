import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationFullComponent } from './publication-full.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PublicationFullComponent }
];

@NgModule({
  declarations: [PublicationFullComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicationFullModule { }
