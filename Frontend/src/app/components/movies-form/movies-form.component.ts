import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../interfaces/movie';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movies-form.component.html',
  styleUrl: './movies-form.component.css'
})
export class MoviesFormComponent {

  constructor(private moviesService: MoviesService, private router: Router){}

  movie: Movie = {
    _id: '',
    title: '',
    description: '',
    producer: '',
    time: '',
    image: ''
  }

  submitMovie(){
    this.moviesService.createMovie(this.movie).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

}
