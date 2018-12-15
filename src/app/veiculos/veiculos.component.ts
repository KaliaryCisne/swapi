import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../classesSwapi/vehicles';
import { VeiculosService } from '../classes-Servicos/veiculos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  veiculos: Vehicles[];
  constructor(private veiculosService: VeiculosService,
              private location: Location) { }
  ngOnInit() {
    this.listarVeiculos();
  }
  listarVeiculos(){
    return this.veiculosService.listaVeiculos().subscribe(res => this.veiculos = res.results);
  }
  voltar(): void{
    this.location.back();
  }
}
