import {Component, OnInit} from '@angular/core';
import { AlbumService } from './services/albums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
   

    constructor(private serviceAlbum: AlbumService) {

    }

    ngOnInit() {
      // call the service  top get the albums
        this.serviceAlbum.loadAlbums();
      
    }



}

