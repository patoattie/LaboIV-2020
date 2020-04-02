import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  @Input() mascota: Mascota;
  @Output() turno = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    console.log('Evento click');
    this.turno.emit('Evento ejecutado en mascota: ' + this.mascota.nombre);
  }

}
