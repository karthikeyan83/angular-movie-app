import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  movies:any;
  selectedMovie:any;
  selMovie:any;

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
