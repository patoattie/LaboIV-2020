import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './paginas/formulario/formulario.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'form'
  },
  {
    path: 'form',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
