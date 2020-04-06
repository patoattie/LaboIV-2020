import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MascotasService } from '../../servicios/mascotas.service';
import { Mascota } from 'src/app/clases/mascota';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoMascotasComponent implements OnInit {
  listaMascotas: Mascota[] = [];
  @Output() mostrarMascotaEvent = new EventEmitter<Mascota>();

  constructor(public mascotas: MascotasService) { }

  ngOnInit(): void {
    this.listaMascotas = this.mascotas.getListaMascotas();
  }

  mostrarDetalleMascota(mascota: Mascota) {
    this.mostrarMascotaEvent.emit(mascota);
  }

}
