import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { ContatosListagemComponent } from './pessoas/contatos-listagem.component';
import { FilmesDetalheComponent } from './filmes-detalhe/filmes-detalhe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'filmes', component: FilmesComponent},
  {path:'filmes-detalhes/:id', component: FilmesDetalheComponent},
  {path:'pessoas', component: ContatosListagemComponent},
  {path:'veiculos', component: VeiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
