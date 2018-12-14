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
  filmeDetalhe: Array<Filmes>;
  constructor(private http: HttpClient) { }
  listarFilmes(){
   return this.http.get<ObjectFilms>(this.filmesURl);
  }

  getFilme(id: number): Filmes{
    this.listarFilmes().subscribe(res => this.filmeDetalhe = res.results);
    console.log(this.filmeDetalhe[id]);
    return this.filmeDetalhe[id];
  }
}
