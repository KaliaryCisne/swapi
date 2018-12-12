import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../classesSwapi/vehicles';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  veiculos: Vehicles[];
  constructor(private veiculosService: VeiculosService) { }
  ngOnInit() {
    this.listarVeiculos();
  }
  listarVeiculos(){
    return this.veiculosService.listaVeiculos().subscribe(res => this.veiculos = res.results);
  }
}
