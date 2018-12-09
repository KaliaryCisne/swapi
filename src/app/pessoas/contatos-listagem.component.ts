import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { People } from '../classesSwapi/people';
import { ObjectPeople } from '../classesSwapi/objectpeople';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  pessoas: People[];
  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.listarPessoas();
  }

  listarPessoas() {
    this.contatoService.listarPessoas().subscribe(res => this.pessoas = res.results);
  }

}
