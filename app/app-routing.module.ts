import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pagina/contato/contato.component';
import { CadastroDeJogosComponent } from './pagina/cadastro-de-jogos/cadastro-de-jogos.component';
import { HomeComponent } from './pagina/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'cadastro-de-jogos', component: CadastroDeJogosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
