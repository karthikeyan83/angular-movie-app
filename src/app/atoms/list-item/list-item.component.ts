import { Component, OnInit,Input } from '@angular/core';
import { MovieService } from '../../movie.service';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
})
export class ListItemComponent implements OnInit {
  @Input('movie') movie;
  @Input('selected') selected;
  selMovie: any;
  constructor(private movieService: MovieService) { }
  ngOnInit(): void {
    this.movieService.movieSelected
        .subscribe(
          (movieList) => {
            console.log(movieList)
            this.selMovie = movieList;
          }
        );
  }
  selectMovie = (selectedMovie) => {
    this.movieService.setSelectedMovie(selectedMovie)
  }
}
