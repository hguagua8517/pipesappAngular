import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NocomunesComponent } from './ventas/pages/nocomunes/nocomunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path:'nocomunes',
    component: NocomunesComponent,
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
  {
    path:'**',
    redirectTo: ''
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
