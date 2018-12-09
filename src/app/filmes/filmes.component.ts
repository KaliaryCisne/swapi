import { Component, OnInit } from '@angular/core';
import { Filmes } from '../classesSwapi/films';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes: Filmes[];
  constructor(private filmeService: FilmesService) { }

  ngOnInit() {
    this.listarFilmes();
  }
  listarFilmes(){
    this.filmeService.listarFilmes().subscribe(res =>this.filmes = res.results);
  }
}
