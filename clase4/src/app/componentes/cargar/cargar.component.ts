import { Component, OnInit } from '@angular/core';
import { Persona } from '../../clases/persona';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {

    persona: Persona;

    public nombre: String = "Juan";
    public apellido: String = "Perez";

    constructor(private storage: StorageService) { }

  ngOnInit(): void {
  }

  public cargar() {
      this.persona = new Persona(this.nombre, this.apellido);
      console.log(this.persona);
      this.storage.guardarPersona(this.persona);
  }

}
