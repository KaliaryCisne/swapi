import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectNaves } from '../classesSwapi/objectNaves';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavesService {
  navesUrl ="https://swapi.co/api/starships/";
  constructor(private http: HttpClient) { }
  listarNaves(): Observable<ObjectNaves>{
    return this.http.get<ObjectNaves>(this.navesUrl);
  }
}
