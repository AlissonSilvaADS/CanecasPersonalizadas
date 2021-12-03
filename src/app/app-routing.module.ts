import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaricaturasComponent } from './components/template/caricaturas/caricaturas.component';
import { GlitterComponent } from './components/template/glitter/glitter.component';
import { HomeComponent } from './components/template/home/home.component';
import { MaeComponent } from './components/template/mae/mae.component';
import { MagicasComponent } from './components/template/magicas/magicas.component';
import { NamoradosComponent } from './components/template/namorados/namorados.component';
import { PaiComponent } from './components/template/pai/pai.component';
import { CelebridadesComponent } from './components/template/celebridades/celebridades.component';
import { ComfotosComponent } from './components/template/comfotos/comfotos.component';
import { FutebolComponent } from './components/template/futebol/futebol.component';
import { GamesComponent } from './components/template/games/games.component';
import { FilmesComponent } from './components/template/filmes/filmes.component';
import { ProfissoesComponent } from './components/template/profissoes/profissoes.component';
import { CheckoutComponent } from './components/template/checkout/checkout.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'caricaturas',component: CaricaturasComponent},
  {path:'glitter',component: GlitterComponent},
  {path:'magicas',component: MagicasComponent},
  {path:'parasuamae',component: MaeComponent},
  {path:'paraseupai',component: PaiComponent},
  {path:'namorados',component: NamoradosComponent},
  {path:'comfotos',component: ComfotosComponent},
  {path:'futebol',component: FutebolComponent},
  {path:'games',component: GamesComponent},
  {path:'filmes',component: FilmesComponent},
  {path:'profissoes',component: ProfissoesComponent},
  {path:'checkout',component: CheckoutComponent},
  {path:'celebridades',component: CelebridadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
