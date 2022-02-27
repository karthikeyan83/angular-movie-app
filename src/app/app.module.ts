import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './atoms/header/header.component';
import { ListItemComponent } from './atoms/list-item/list-item.component';
import { PosterComponent } from './atoms/poster/poster.component';
import { HeadingComponent } from './atoms/heading/heading.component';
import { ListComponent } from './molecules/list/list.component';
import { MovieDetailsComponent } from './molecules/movie-details/movie-details.component';
import { MovieCatalogueComponent } from './organism/movie-catalogue/movie-catalogue.component';
import { MovieService } from './movie.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListItemComponent,
    PosterComponent,
    HeadingComponent,
    ListComponent,
    MovieDetailsComponent,
    MovieCatalogueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
