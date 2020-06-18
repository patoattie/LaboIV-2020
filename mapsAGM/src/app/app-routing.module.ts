import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './components/maps/maps.component';
import { MapMarkerComponent } from './components/map-marker/map-marker.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'maps',
        pathMatch: 'full'
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'mapsClick',
        component: MapMarkerComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
