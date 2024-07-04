import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  BDURL: string = 'localhost:3000'

  constructor(private http: HttpClient) {}

  getMovies():Observable<Movie>{
    return this.http.get(`${this.BDURL}/movies`)
  }

  getMovie(id: string){

  }

  createMovie(movie: Movie){

  }

  updateMovie(id: string, movie: Movie){

  }

  deleteMovie(id: string){

  }

}
