import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent implements OnInit {
  selMovie:Movie;
  constructor(private movieService:MovieService) { }
  ngOnInit() {
	this.movieService.movieSelected
      .subscribe(
        (movie) => {
          this.selMovie = movie;
        }
      );
  }

}
