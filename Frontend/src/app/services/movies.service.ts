import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  getMovies(){

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
