import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatosUrl = 'https://swapi.co/api/';
  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get<String[]>(`${this.contatosUrl}`);
  }
}