import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {EventoListComponent} from './evento-list/evento-list.component';
import {CervejariaListComponent} from './cervejaria-list/cervejaria-list.component';
import {PaginaCompartilharComponent} from './pagina-compartilhar/pagina-compartilhar.component';
import {ContatosComponent} from './contatos/contatos.component';
import {CervejaGridComponent} from './cerveja-grid/cerveja-grid.component';
import {CervejaListComponent} from './cerveja-list/cerveja-list.component';

const APP_ROUTES: Routes = [
    { path: 'cadastro', component: SignupComponent }
  , { path: 'login', component: LoginComponent}
  , { path: 'eventos', component: EventoListComponent}
  , { path: 'cervejarias', component: CervejariaListComponent}
  , { path: 'produtos', component: CervejaListComponent }
  , { path: 'contatos', component: ContatosComponent}
  , { path: 'compartilhamento', component: PaginaCompartilharComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);

