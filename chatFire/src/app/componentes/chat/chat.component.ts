import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  chat: any[];
  suscripcion: Subscription;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.suscripcion = this.firestore.collection('prueba/utn/chat').valueChanges()
    .subscribe(datos => {
      console.log(datos);
      this.chat = datos;
    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  public enviar() {
    this.firestore.collection('prueba/utn/chat').ref.add({
      user: 'Patricio',
      mensaje: 'Hola',
      date: Date.now()
    });
  }

}
