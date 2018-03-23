import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlbumService } from '../services/albums.service';

import * as _ from "lodash";

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit, OnDestroy {
  @Input()
  public showCount = false;
  @Output()
  public onViewClick = new EventEmitter<any[]>();
  public albums: any[] = [];
  public showDetail: boolean = false;
  public detailAlbum: any[];
  public selectedAlbum: number;
  public filteralbums: any[]=[];
  public subAlbum$ : Subscription;
  constructor(private serviceAlbum: AlbumService) { }

  ngOnInit() {
    this.subAlbum$ = this.serviceAlbum.albumSubject$
     .do(res => console.log(res.length))
     .subscribe(
      (res) => { 

         this.albums = res.sort(this.compare).reverse();
       
         this.filteralbums = _.uniqBy(this.albums, 'albumId').slice(0,3);
         this.albums = this.albums.filter( item =>{ return item.albumId >= this.filteralbums[2].albumId}) // release memory
       
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

  private  compareDetail(a,b) {
    if (a.id < b.id)
      return -1;
    if (a.id > b.id)
      return 1;
    return 0;
  }
  ngOnDestroy() {
    this.subAlbum$.unsubscribe();
  }

  public viewDetail(id: number) {
     this.showDetail = true;
     this.selectedAlbum = id;
     this.detailAlbum = this.albums.filter( item =>{ return item.albumId === id})
                         .sort(this.compareDetail).reverse()
                         .slice(0,2);
                       
  }

  
}
