import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';
import { CargarComponent } from './componentes/cargar/cargar.component';


const routes: Routes = [
    {
        path: 'paises',
        component: ListadoComponent,
        children: [
            {
                path: 'detalle',
                component : CargarComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
