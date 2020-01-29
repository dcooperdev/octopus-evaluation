import { Publications } from './../states/publications/publication.reducer';
import { User } from 'src/app/Interfaces/user.interface';
import { Session } from './../states/session/session.reducer';
import { Component, OnInit } from '@angular/core';
import { Publication } from '../Interfaces/publication.interface';
import { PublicationsService } from '../services/publications/publications.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { SetPublications } from '../states/publications/publication.actions';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  public publicationsList: Publication[];
  public user: User;

  constructor( private publications: PublicationsService, private store: Store<AppState> ) {

    store.select('blog')
         .subscribe(
           (list: Publications) => {
             // Si la lista de publicaciones ya están en lso estados de la app la renderizo
             // desde los estados, si no la pido al servidor
             if ( list.publications.length > 0 ) {
               this.publicationsList = list.publications;
             } else {

              publications.getPublicationsList().subscribe(
                (response: Publication[]) => {
                  const PublicationsAction = new SetPublications( response );
                  store.dispatch( PublicationsAction );
                }
              );

             }
           }
         );

    store.select('session')
         .subscribe((session: Session) => this.user = session.user);
  }

  ngOnInit() {
  }

}
