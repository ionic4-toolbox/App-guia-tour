import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './component/chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'chat', component:ChatComponent},
  { path: 'novo-lugar', loadChildren: './page/novo-lugar/novo-lugar.module#NovoLugarPageModule' },
  { path: 'detalhe-lugar', loadChildren: './page/detalhe-lugar/detalhe-lugar.module#DetalheLugarPageModule' },
  { path: 'detalhe-lugar/:id', loadChildren: './page/detalhe-lugar/detalhe-lugar.module#DetalheLugarPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
