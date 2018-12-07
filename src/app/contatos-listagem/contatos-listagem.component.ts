import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { People } from '../people';
import { ObjectPeople } from '../objectpeople';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  pessoas: People[];
  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    //this.pessoas = this.contatoService.listar(); 
    this.contatoService.listar().subscribe(res => this.pessoas = res.results);
  }

}
