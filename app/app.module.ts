import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pagina/header/header.component';
import { MenuComponent } from './pagina/menu/menu.component';
import { HomeComponent } from './pagina/home/home.component';
import { ContatoComponent } from './pagina/contato/contato.component';
import { FooterComponent } from './pagina/footer/footer.component';
import { CadastroDeJogosComponent } from './pagina/cadastro-de-jogos/cadastro-de-jogos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    ContatoComponent,
    FooterComponent,
    CadastroDeJogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
