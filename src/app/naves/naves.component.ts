import { Component, OnInit } from '@angular/core';
import { Naves } from '../classesSwapi/naves';
import { NavesService } from '../classes-Servicos/naves.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {
  naves: Naves[];
  naveDetalhe: Naves;
  constructor(private navesService: NavesService,
              private location: Location) { }

  ngOnInit() {
    this.listarNaves();
  }
  listarNaves(){
    this.navesService.listarNaves().subscribe(res => this.naves = res.results);
  }
  detalharNave(nave: Naves){
    this.naveDetalhe = nave;
  }
  voltar(): void{
    this.location.back();
  }
}
