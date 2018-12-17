import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Raca } from '../classesSwapi/raca';
import { RacasService } from '../classes-Servicos/racas.service';

@Component({
  selector: 'app-racas',
  templateUrl: './racas.component.html',
  styleUrls: ['./racas.component.css']
})
export class RacasComponent implements OnInit {
  racas: Raca[];
  racaDetalhe: Raca;
  constructor(private racaService: RacasService,
              private location: Location) { }
  ngOnInit() {
    this.listarRacas();
  }
  listarRacas(){
    return this.racaService.listaRacas().subscribe( res => this.racas = res.results );
  }
  detalharRaca(raca: Raca){
    this.racaDetalhe = raca;
  }
  voltar(): void{
    this.location.back();
  }
}
