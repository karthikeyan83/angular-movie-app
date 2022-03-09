import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {  ListComponent } from './list.component';
import { MovieService } from '../../movie.service';
const movieListResponse = {
  "Search": [
    {
      "Title": "Iron Man",
      "Year": "2008",
      "imdbID": "tt0371746",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
    }
  ],
  "totalResults": "12794",
  "Response": "True"
};


describe('ListComponent', () => {
  let injector: TestBed;
  let service: MovieService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });

    injector = getTestBed();
    service = injector.get(MovieService);
    httpMock = injector.get(HttpTestingController);
  });
  it('GetMovies should return list of movies', () => {
    service.getMovies().subscribe((res) => {
      expect(res).toEqual(movieListResponse);
    });
    const req = httpMock.expectOne('https://www.omdbapi.com/?s=man&apikey=4a3b711b&page=1&pageSize=5');
    expect(req.request.method).toBe('GET');
    req.flush(movieListResponse);
  });

});
