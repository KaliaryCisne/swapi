import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './pessoas/contatos-listagem.component';
import { ContatoService } from './classes-Servicos/contato.service';
import { HttpClientModule } from '@angular/common/http';
import { FilmesComponent } from './filmes/filmes.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FilmesDetalheComponent } from './filmes-detalhe/filmes-detalhe.component';
import { RacasComponent } from './racas/racas.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { NavesComponent } from './naves/naves.component';
import { NavesDetalheComponent } from './naves-detalhe/naves-detalhe.component';
import { PessoasDetalheComponent } from './pessoas-detalhe/pessoas-detalhe.component';
import { PlanetasDetalheComponent } from './planetas-detalhe/planetas-detalhe.component';
import { RacasDetalheComponent } from './racas-detalhe/racas-detalhe.component';
import { VeiculosDetalheComponent } from './veiculos-detalhe/veiculos-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent,
    FilmesComponent,
    VeiculosComponent,
    HomeComponent,
    FilmesDetalheComponent,
    RacasComponent,
    PlanetasComponent,
    NavesComponent,
    NavesDetalheComponent,
    PessoasDetalheComponent,
    PlanetasDetalheComponent,
    RacasDetalheComponent,
    VeiculosDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
