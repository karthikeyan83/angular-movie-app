import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../../movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  movies:Movie;
  selectedMovie:any;
  selMovie:Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovieDetails();
  }
  getMovieDetails(){
    let posts =this.movieService.getMovies().subscribe(res => {
       this.movies = res["Search"];
       this.selectMovie(res["Search"][0]);
    });
    this.movieService.movieSelected
        .subscribe(
          (movie) => {
            this.selMovie = movie;
          }
   );
  }

  selectMovie = (selectedMovie) => {
    this.selectedMovie = this.movieService.setSelectedMovie(selectedMovie)
  }


}
