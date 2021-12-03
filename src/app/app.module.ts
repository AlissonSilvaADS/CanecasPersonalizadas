import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/template/home/home.component';
import { CaricaturasComponent } from './components/template/caricaturas/caricaturas.component';
import { GlitterComponent } from './components/template/glitter/glitter.component';
import { MagicasComponent } from './components/template/magicas/magicas.component';
import { CelebridadesComponent } from './components/template/celebridades/celebridades.component';
import { MaeComponent } from './components/template/mae/mae.component';
import { PaiComponent } from './components/template/pai/pai.component';
import { NamoradosComponent } from './components/template/namorados/namorados.component';
import { FutebolComponent } from './components/template/futebol/futebol.component';
import { GamesComponent } from './components/template/games/games.component';
import { FilmesComponent } from './components/template/filmes/filmes.component';
import { ProfissoesComponent } from './components/template/profissoes/profissoes.component';
import { ComfotosComponent } from './components/template/comfotos/comfotos.component';
import { CheckoutComponent } from './components/template/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaricaturasComponent,
    GlitterComponent,
    MagicasComponent,
    CelebridadesComponent,
    MaeComponent,
    PaiComponent,
    NamoradosComponent,
    FutebolComponent,
    GamesComponent,
    FilmesComponent,
    ProfissoesComponent,
    ComfotosComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
