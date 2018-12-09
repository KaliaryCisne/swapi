import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './pessoas/contatos-listagem.component';
import { ContatoService } from './contato.service';
import { HttpClientModule } from '@angular/common/http';
import { FilmesComponent } from './filmes/filmes.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent,
    FilmesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
