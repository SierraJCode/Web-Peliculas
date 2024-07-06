import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  movies: Movie[] = [];

  constructor(private movieService: MoviesService){}

  movie: any = this.movieService.getMovies().subscribe(
    res => console.log(res),
    err => console.log(err)
  )


  ngOnInit(){
    this.getMovies();
  }

  getMovies(){
    return this.movieService.getMovies().subscribe({next: (res) => {
      console.log(res)}
    })
  }
}
