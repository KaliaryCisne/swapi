import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../classes-Servicos/contato.service';
import { People } from '../classesSwapi/people';
import { ObjectPeople } from '../classesSwapi/objectpeople';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  pessoas: People[];
  constructor(private contatoService: ContatoService,
              private location: Location) { }

  ngOnInit() {
    this.listarPessoas();
  }

  listarPessoas() {
    this.contatoService.listarPessoas().subscribe(res => this.pessoas = res.results);
  }
  voltar(): void{
    this.location.back();
  }

}
