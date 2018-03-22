import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AlbumService} from "./services/albums.service";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";



import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/of';

import { MainContainerComponent } from './main-container/main-container.component';


@NgModule({
    declarations: [
        AppComponent,
        MainContainerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    providers: [
        AlbumService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
