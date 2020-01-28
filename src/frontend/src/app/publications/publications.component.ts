import { Component, OnInit } from '@angular/core';
import { Publication } from '../Interfaces/publication.interface';
import { PublicationsService } from '../services/publications/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  public publicationsList: Publication[];

  constructor( private publications: PublicationsService ) {
    publications.getPublicationsList().subscribe(
      (response: Publication[]) => this.publicationsList = response
    );
  }

  ngOnInit() {
  }

}
