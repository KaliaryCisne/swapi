import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { ContatosListagemComponent } from './pessoas/contatos-listagem.component';
import { FilmesDetalheComponent } from './filmes-detalhe/filmes-detalhe.component';
import { HomeComponent } from './home/home.component';
import { RacasComponent } from './racas/racas.component';
import { NavesComponent } from './naves/naves.component';
import { PlanetasComponent } from './planetas/planetas.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'filmes', component: FilmesComponent},
  {path:'pessoas', component: ContatosListagemComponent},
  {path:'veiculos', component: VeiculosComponent},
  {path:'racas', component: RacasComponent},
  {path:'naves', component: NavesComponent},
  {path:'planetas', component: PlanetasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
