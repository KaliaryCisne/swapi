import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ObjectPeople } from './classesSwapi/objectpeople';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatosUrl = 'https://swapi.co/api/people';
  pessoas: Object;
  constructor(private http: HttpClient) { }
  listarPessoas(){
    return this.http.get<ObjectPeople>(this.contatosUrl);
  }
}