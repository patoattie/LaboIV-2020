import { Injectable } from '@angular/core';
import { Mascota } from '../clases/mascota';
import { TipoMascota } from '../enums/tipo-mascota.enum';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private listaMascotas: Mascota[] = [];

  constructor() {
    this.listaMascotas = this.cargarListaMascotas();
  }

  getListaMascotas(): Mascota[] {
    return this.listaMascotas;
  }

  agregarMascota(mascota: Mascota): void {
    this.listaMascotas.push(mascota);
    localStorage.setItem('mascotas', JSON.stringify(this.listaMascotas));
  }

  private cargarListaMascotas(): Mascota[] {
    const storage: Mascota[] = JSON.parse(localStorage.getItem('mascotas'));

    if (storage != null) {
      this.listaMascotas = storage;
    }

    if (this.listaMascotas.length === 0) { // Si no hay datos inicializo con 3 mascotas de prueba.
      this.inicializarListaMascotas();
    }

    return this.listaMascotas;
  }


  private inicializarListaMascotas(): void {
    this.agregarMascota(new Mascota('Chatrán', '../assets/perro.jpg', TipoMascota.PERRO));
    this.agregarMascota(new Mascota('Félix', '../assets/gato.jpg', TipoMascota.GATO));
    this.agregarMascota(new Mascota('Nemo', '../assets/pez.jpg', TipoMascota.PEZ));
  }

}
