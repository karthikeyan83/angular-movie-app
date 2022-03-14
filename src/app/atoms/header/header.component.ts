import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../../movie';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  selMovie: Movie;
  constructor(private movieService: MovieService) { }
  ngOnInit() {
          	this.movieService.movieSelected
                .subscribe(
                  (movie) => {
                    this.selMovie = movie;
                  }
                );
  }
}
