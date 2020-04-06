import { Component } from '@angular/core';
import { Mascota } from './clases/mascota';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpMascotas';
  mascota: Mascota;

  setMascota(unaMascota: Mascota): void {
    this.mascota = unaMascota;
  }

}
