import { Injectable,Output,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiURL: string = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b&page=1&pageSize=5';
  private _selectedMovie: any;
  @Output() movieSelected = new EventEmitter();
  constructor(private httpService: HttpClient) {
    this.getMovies();
  }
  getMovies() {
    return this.httpService.get(`${this.apiURL}`);
  }
  setSelectedMovie(selMovie){
    this.movieSelected.emit(selMovie);
  }

}
