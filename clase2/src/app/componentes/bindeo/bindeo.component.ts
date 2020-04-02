import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../clases/mascota';

@Component({
  selector: 'app-bindeo',
  templateUrl: './bindeo.component.html',
  styleUrls: ['./bindeo.component.css']
})
export class BindeoComponent implements OnInit {
  nombre: string;
  srcGatito: string;
  lista: Mascota[];

  constructor() {
    this.nombre = 'Felix';
    // this.srcGatito = 'https://www.whiskas.es/assets/img/article/Kitten/care.jpg';
    this.srcGatito = 'https://www.purina.es/sites/g/files/mcldtz1656/files/styles/nppe_article_listing_image_and_description/public/2017-11/Bringing-Your-Kitten-Home_3.jpg?itok=VL7IwOU-';
    this.lista = [];
  }

  ngOnInit(): void {
  }

  public enviar(e) {
    // console.log(e);
    console.log(this.nombre);
    this.lista.push(new Mascota(this.nombre));
  }

}
