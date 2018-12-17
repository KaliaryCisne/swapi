import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectFilms } from '../classesSwapi/objectfilms';
import { Filmes } from '../classesSwapi/films';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilmesService {
  filmesURl = "https://swapi.co/api/films/";
  filmes = Object;
  // filmeDetalhe: Array<Filmes>;
  constructor(private http: HttpClient) { }
  listarFilmes(): Observable<ObjectFilms>{
   return this.http.get<ObjectFilms>(this.filmesURl);
  }
}
