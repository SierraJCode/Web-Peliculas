import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../interfaces/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movies-form.component.html',
  styleUrl: './movies-form.component.css'
})
export class MoviesFormComponent {

  constructor(private moviesService: MoviesService){}

  movie: Movie = {
    title: '',
    description: '',
    producer: '',
    time: '',
    image: ''
  }

  submitMovie(){
    this.moviesService.createMovie(this.movie).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
