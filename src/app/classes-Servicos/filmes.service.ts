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
  constructor(private http: HttpClient) { }
  listarFilmes(){
    return this.http.get<ObjectFilms>(this.filmesURl);
  }

  //Retorna um filme especifico
  getFilme(id: number): Observable<Filmes>{
    const url = `${this.filmesURl}/${id}`;
    return this.http.get<Filmes>(url);
  }
}
