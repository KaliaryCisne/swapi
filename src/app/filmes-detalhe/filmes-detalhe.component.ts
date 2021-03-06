import { Component, OnInit, Input } from '@angular/core';
import { Filmes } from '../classesSwapi/films';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from '../classes-Servicos/filmes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filmes-detalhe',
  templateUrl: './filmes-detalhe.component.html',
  styleUrls: ['./filmes-detalhe.component.css']
})
export class FilmesDetalheComponent implements OnInit {
  @Input() filme: Filmes;
  constructor(private route: ActivatedRoute,
              private filmeService: FilmesService,
              private location: Location) { }

  ngOnInit() {
  }

  voltar(): void{
    this.location.back();
  }
}

