import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { FirebaseService } from 'src/app/service/firebase.service';
import { Lugar } from 'src/app/model/lugar';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-novo-lugar',
  templateUrl: './novo-lugar.page.html',
  styleUrls: ['./novo-lugar.page.scss'],
})
export class NovoLugarPage implements OnInit {
  
  captureDataUrl: string;
  lugares: Lugar = {
    nome: '',
    descricao: ''
  }
  constructor(
    private firebaseService: FirebaseService,
    private firebase: AngularFireStorage,
    private loadingController: LoadingController,
    private camera: Camera
  ) { }

  ngOnInit() {

  }

  async novoLugar() {

    const loading = await this.loadingController.create({
      message: 'Salvando...',
    });
    await loading.present();
    this.firebaseService.
      criarLugar(this.lugares).
      then(() => console.log("Salvo com sucesso"))
    loading.dismiss();

    if(this.lugares != null){

    }

  }

  tirarFoto() {
    //setup camera options
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }



upload(){
  let storageRef = this.firebase.storage.ref();
  // Create a timestamp as filename
  const filename = Math.floor(Date.now() / 1000);

  // Create a reference to 'images/todays-date.jpg'
  const imageRef = storageRef.child(`lugares-img/${filename}.jpg`);
  imageRef.putString('', this.captureDataUrl).then((snapshot)=> {
    // Do something here when the data is succesfully uploaded!
  
  });

}

}