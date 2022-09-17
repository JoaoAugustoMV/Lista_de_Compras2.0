import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeComprasComponent } from './pages/lista-de-compras/listaDeCompras/lista-de-compras.component';
import { ListasSalvasComponent } from './pages/listas-salvas/listas-salvas.component';


const routes: Routes = [
  { path:'novaLista', component: ListaDeComprasComponent, title: "Nova Lista"},
  { path:'', component: ListasSalvasComponent, title: "Pagina Inicial"},
  { path:'editarLista/:nomeLista', component: ListaDeComprasComponent, title: "Editar Lista"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
