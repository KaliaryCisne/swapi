import { Component, OnInit, Input } from '@angular/core';
import { Naves } from '../classesSwapi/naves';
import { ActivatedRoute } from '@angular/router';
import { NavesService } from '../classes-Servicos/naves.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-naves-detalhe',
  templateUrl: './naves-detalhe.component.html',
  styleUrls: ['./naves-detalhe.component.css']
})
export class NavesDetalheComponent implements OnInit {
  @Input() nave: Naves;
  constructor(private route: ActivatedRoute,
              private naveService: NavesService,
              private location: Location) { }

  ngOnInit() {
  }
  
  voltar(): void{
    this.location.back();
  }
}
