import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CervejaItemComponent } from './cerveja-item/cerveja-item.component';
import { CervejaListComponent } from './cerveja-list/cerveja-list.component';
import { CervejariaItemComponent } from './cervejaria-item/cervejaria-item.component';
import { CervejariaListComponent } from './cervejaria-list/cervejaria-list.component';
import { CervejaGridComponent } from './cerveja-grid/cerveja-grid.component';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoListComponent } from './evento-list/evento-list.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PaginaCompartilharComponent } from './pagina-compartilhar/pagina-compartilhar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {environment} from '../environments/environment';

import { MatToolbarModule
, MatButtonModule
, MatGridListModule
, MatSidenavModule
, MatIconModule
, MatListModule
, MatCardModule
, MatFormFieldModule
, MatInputModule, MatMenuModule} from '@angular/material';
import {AuthService} from './auth/auth.service';

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
    PaginaCompartilharComponent,
    NavigationComponent,
    CervejaGridComponent
  ],
  imports: [
    BrowserModule
    , routing
    , BrowserAnimationsModule
    , LayoutModule
    , MatToolbarModule
    , MatButtonModule
    , MatGridListModule
    , MatSidenavModule
    , MatIconModule
    , MatListModule
    , MatCardModule
    , MatFormFieldModule
    , MatInputModule
    , FormsModule, MatMenuModule
    , FlexLayoutModule
    , AngularFireModule.initializeApp(environment.firebase)
    , AngularFirestoreModule
    , ReactiveFormsModule
  ],
  exports: [
      LayoutModule
    , MatToolbarModule
    , MatButtonModule
    , MatSidenavModule
    , MatIconModule
    , MatListModule
    , MatGridListModule
    , MatCardModule
    , MatFormFieldModule
    , MatInputModule
    ],
    providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
