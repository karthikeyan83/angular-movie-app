import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  movies:any;
  selMovie:any;
  @Output() movieSelected = new EventEmitter();
  constructor(private movieService: MovieService) { }

  ngOnInit() {
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
    this.movieService.setSelectedMovie(selectedMovie)
  }

}
