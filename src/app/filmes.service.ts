import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectFilms } from './classesSwapi/objectfilms';

@Injectable({
  providedIn: 'root'
})

export class FilmesService {
  filmesURl = "https://swapi.co/api/films/";
  filmes = Object;
  constructor(private http: HttpClient) { }
  listarFilmes(){
    return this.http.get<ObjectFilms>(this.filmesURl);
  }
}
