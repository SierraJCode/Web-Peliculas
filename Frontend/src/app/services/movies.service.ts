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

  getMovies(){
    return this.http.get(`${this.BDURL}/movies`);
  }

  getMovie(id: string){
    return this.http.get(`${this.BDURL}/movies/${id}`);
  }

  createMovie(movie: Movie){
    return this.http.post(`${this.BDURL}/movies/create`, movie)
  }

  updateMovie(id: string, movie: Movie){
    return this.http.put(`${this.BDURL}/movies/update/${id}`, movie)
  }

  deleteMovie(id: string){
    return this.http.delete(`${this.BDURL}/movies/delete/${id}`)
  }

}
