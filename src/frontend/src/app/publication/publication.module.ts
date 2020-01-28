import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationComponent } from './publication.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PublicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PublicationComponent
  ]
})
export class PublicationModule { }
