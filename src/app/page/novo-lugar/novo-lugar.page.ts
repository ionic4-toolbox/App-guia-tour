import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';
import { Lugar } from 'src/app/model/lugar';

@Component({
  selector: 'app-novo-lugar',
  templateUrl: './novo-lugar.page.html',
  styleUrls: ['./novo-lugar.page.scss'],
})
export class NovoLugarPage implements OnInit {
  lugares: Lugar = {
    nome: '',
    descricao: ''
  }
  constructor(
    private firebaseService: FirebaseService,
    private loadingController: LoadingController,
    ) {}

  ngOnInit() {
    
  }

  async novoLugar(){

    const loading = await this.loadingController.create({
      message: 'Salvando...',
    });
    await loading.present();
    this.firebaseService.
      criarLugar(this.lugares).
      then(() => console.log("Salvo com sucesso"))
      loading.dismiss();

  }
}
