import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlbumService } from '../services/albums.service';


@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit, OnDestroy {
  @Input()
  public showCount = false;
  @Output()
  public onViewClick = new EventEmitter<any[]>();
  public albums: any[] = [];
  public filteralbums: any[]=[];
  public subAlbum$ : Subscription;
  constructor(private serviceAlbum: AlbumService) { }

  ngOnInit() {
    this.subAlbum$ = this.serviceAlbum.albumSubject$
     .do(res => console.log(res))
     .subscribe(
      (res) => { 

         this.albums = res.sort(this.compare).slice(0,100).reverse();

//todo:  flter only  the last 3 AlbumsIds  on click over some album  show two first images  tied to the ALBUM Id selected

       //  this.filteralbums = [...new Set()];        
      }
    )
  }


  private  compare(a,b) {
    if (a.albumId < b.albumId)
      return -1;
    if (a.albumId > b.albumId)
      return 1;
    return 0;
  }


  ngOnDestroy() {
    this.subAlbum$.unsubscribe();
  }

  public onViewAlbum(album: any[]) {
     this.onViewClick.emit(album);
  }
}
