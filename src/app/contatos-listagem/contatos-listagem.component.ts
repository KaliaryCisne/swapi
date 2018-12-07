import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  resources = [
    'root',
    'people',
    'films',
    'starships',
    'vehicles',
    'species',
    'planets',
    'person',
    'film',
    'starship',
    'vehicle',
    'specie',
    'planet',
    'person schema',
    'film schema',
    'starship schema',
    'vehicle schema',
    'specie schema',
    'planet schema'
  ];

  contatos: String[];
  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.contatoService.listar().subscribe(dados => this.contatos = dados);
  }

}
