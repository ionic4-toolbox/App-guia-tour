import { FirebaseService } from './../service/firebase.service';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
private  lugares: any; 
constructor(private menu: MenuController, private firebase:FirebaseService) { 
  this.firebase.criarLugar({nome: 'doca', descricao: 'sdadsda'}).then(()=> console.log("===================")
  )  
}

openCustom() {
  this.menu.enable(true, 'custom');
  this.menu.open('custom');
}


}
