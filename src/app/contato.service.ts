import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from './people';
import { catchError, map, tap } from 'rxjs/operators';
import { ObjectPeople } from './objectpeople';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatosUrl = 'https://swapi.co/api/people';
  pessoas: Object;

  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get<ObjectPeople>(this.contatosUrl);
  }

//   listar(): Observable<People[]> {
//     return this.http.get(this.contatosUrl)
//                     .map(res=>res.json())
//                     .catch(err=> Observable.throw(err.message));
//  } 
}