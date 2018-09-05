import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CervejaItemComponent } from './cerveja-item/cerveja-item.component';
import { CervejaListComponent } from './cerveja-list/cerveja-list.component';
import { CervejariaItemComponent } from './cervejaria-item/cervejaria-item.component';
import { CervejariaListComponent } from './cervejaria-list/cervejaria-list.component';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoListComponent } from './evento-list/evento-list.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PaginaCompartilharComponent } from './pagina-compartilhar/pagina-compartilhar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CervejaItemComponent,
    CervejaListComponent,
    CervejariaItemComponent,
    CervejariaListComponent,
    EventoItemComponent,
    EventoListComponent,
    ContatosComponent,
    PaginaCompartilharComponent
  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
