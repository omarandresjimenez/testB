
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AlbumService {
    public albumSubject$ = new BehaviorSubject<any[]>([]);
  
    constructor(private http: HttpClient) {

    }
    
    loadAlbums() {
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
            .subscribe((res:any) => {
                this.albumSubject$.next(res);
            });


    }


}

