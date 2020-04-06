import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../../servicios/mascotas.service';
import { Mascota } from 'src/app/clases/mascota';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoMascotasComponent implements OnInit {
  listaMascotas: Mascota[] = [];

  constructor(public mascotas: MascotasService) { }

  ngOnInit(): void {
    this.listaMascotas = this.mascotas.getListaMascotas();
  }

}
