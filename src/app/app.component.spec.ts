import { ComponentFixture, TestBed,async } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


import { MovieDetailsComponent } from './molecules/movie-details/movie-details.component';
import { PosterComponent } from "./atoms/poster/poster.component";
import { HeaderComponent } from "./atoms/header/header.component";
import { HeadingComponent } from "./atoms/heading/heading.component";
import { MovieService } from './movie.service';


describe('HeaderComponent', () => {
  let component: MovieDetailsComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  // * We use beforeEach so our tests are run in isolation
  beforeEach(() => {
    TestBed.configureTestingModule({
      // * here we configure our testing module with all the declarations,
      // * imports, and providers necessary to this component
      providers: [],
      declarations: [MovieDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance; // The component instantiation
    element = fixture.nativeElement; // The HTML reference
  });

  it('should create', () => {
    // * arrange
    const selMovie = 'Iron Man';
    const titleElement = element.querySelector('card-title');
    // * act
    component.selMovie = selMovie;
    fixture.detectChanges();
    // * assert
    expect(titleElement.textContent).toContain(selMovie);
  });
});
