import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { ContatoService } from './contato.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
