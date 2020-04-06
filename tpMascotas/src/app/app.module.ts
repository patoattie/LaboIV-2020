import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoMascotasComponent } from './componentes/listado-mascotas/listado-mascotas.component';
import { MascotaComponent } from './componentes/mascota/mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoMascotasComponent,
    MascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
