import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  constructor(private movieService: MoviesService){}

  ngOnInit(){
    this.getMovies();
  }

  getMovies(){
    try {
      this.movieService.getMovies();
    } catch (error) {
      console.log(error);
    }
  }
}
