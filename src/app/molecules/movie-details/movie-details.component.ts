import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent implements OnInit {
  selMovie:any;
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
