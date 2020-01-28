import { Publication } from './../Interfaces/publication.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../services/publications/publications.service';

@Component({
  selector: 'app-publication-full',
  templateUrl: './publication-full.component.html',
  styleUrls: ['./publication-full.component.scss']
})
export class PublicationFullComponent implements OnInit {

  private publicationId: string;
  public publicationData: Publication;

  constructor( private publication: PublicationsService, private route: ActivatedRoute ) {
    this.route.paramMap.subscribe(params => {
      this.publicationId = params.get('id');
    });
  }

  ngOnInit() {
    this.publication.getPublicationById( this.publicationId )
        .subscribe( (profile: Publication) => {
          this.publicationData = profile;
          console.log(this.publicationData);
        });
  }

}
