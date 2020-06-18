import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { MapMarkerComponent } from './components/map-marker/map-marker.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    MapMarkerComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      AgmCoreModule.forRoot({
          apiKey: environment.maps_key
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
