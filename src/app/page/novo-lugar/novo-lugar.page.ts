import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-novo-lugar',
  templateUrl: './novo-lugar.page.html',
  styleUrls: ['./novo-lugar.page.scss'],
})
export class NovoLugarPage implements OnInit {

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.
    criarLugar({ nome: 'Ver-O-Peso', descricao: 'Mercado do Ver-o-Peso' }).
    then(() => console.log("Salvo com sucesso"))
  }

}
