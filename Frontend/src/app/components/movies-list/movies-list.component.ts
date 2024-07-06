import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  movies: Movie[] = [];

  constructor(private movieService: MoviesService){}

  ngOnInit(){
    this.getMovies();
  }

  getMovies(){
    return this.movieService.getMovies().subscribe(
      res => this.movies = res,
      err => console.log(err)
    )
  }
}
