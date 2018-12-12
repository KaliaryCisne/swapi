import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './pessoas/contatos-listagem.component';
import { ContatoService } from './classes-Servicos/contato.service';
import { HttpClientModule } from '@angular/common/http';
import { FilmesComponent } from './filmes/filmes.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent,
    FilmesComponent,
    VeiculosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
