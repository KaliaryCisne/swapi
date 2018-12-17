import { Injectable } from '@angular/core';
import { Raca } from '../classesSwapi/raca';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjectRacas } from '../classesSwapi/objectRacas';

@Injectable({
  providedIn: 'root'
})
export class RacasService {
  racasUrl="https://swapi.co/api/species/";
  racas: Object;
  constructor(private http: HttpClient) { }
  listaRacas(): Observable<ObjectRacas>{
    return this.http.get<ObjectRacas>(this.racasUrl);
  }

}
