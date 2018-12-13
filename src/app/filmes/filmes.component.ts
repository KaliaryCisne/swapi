import { Component, OnInit } from '@angular/core';
import { Filmes } from '../classesSwapi/films';
import { FilmesService } from '../classes-Servicos/filmes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes: Filmes[];
  constructor(private filmeService: FilmesService,
              private location: Location) { }

  ngOnInit() {
    this.listarFilmes();
  }
  listarFilmes(){
    this.filmeService.listarFilmes().subscribe(res =>this.filmes = res.results);
  }
  voltar(): void{
    this.location.back();
  }
}
