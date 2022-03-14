import { Component, OnInit,Input } from '@angular/core';
import { MovieService } from '../../movie.service';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  @Input('movie') movie;
  @Input('selected') selected;
  constructor(private movieService: MovieService) { }
  selectMovie = (selectedMovie) => {
    this.movieService.setSelectedMovie(selectedMovie)
  }
}
