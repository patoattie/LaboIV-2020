import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
    lat: number = -34.662799;
    lng: number = -58.3642594;
    zoom: number = 8;

  constructor() { }

  ngOnInit(): void {
  }

}

interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
