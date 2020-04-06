import { Injectable } from '@angular/core';
import { Mascota } from '../clases/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private listaMascotas: Mascota[];

  constructor() { }

  getListaMascotas(): Mascota[] {
    return this.listaMascotas;
  }

  cargarListaMascotas(): void {
    this.listaMascotas = JSON.parse(localStorage.getItem('mascotas'));
  }

  agregarMascota(mascota: Mascota): void {
    this.listaMascotas.push(mascota);
    localStorage.setItem('mascotas', JSON.stringify(this.listaMascotas));
  }


}
