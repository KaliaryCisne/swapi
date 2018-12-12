import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectVehicles } from '../classesSwapi/objectVehicles';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  veiculosURl = "https://swapi.co/api/vehicles/";
  veiculos = Object;
  constructor(private http: HttpClient) { }
  listaVeiculos(){
    return this.http.get<ObjectVehicles>(this.veiculosURl);
  }
}
