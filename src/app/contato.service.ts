import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { People } from './people';
import { catchError, map, tap } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatosUrl = 'https://swapi.co/api/people';
  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get<People[]>(this.contatosUrl);
  }

//   listar(): Observable<People[]> {
//     return this.http.get(this.contatosUrl)
//                     .map(res=>res.json())
//                     .catch(err=> Observable.throw(err.message));
//  } 
}