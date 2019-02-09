import { FirebaseService } from './../service/firebase.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Lugar } from '../model/lugar';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private itemDoc: AngularFirestoreDocument<Lugar>;
  lugares: Lugar[];

  constructor(
    private menu: MenuController,
    private firebaseService: FirebaseService) { }


  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  ngOnInit(): void {
    this.firebaseService.getLugares().subscribe(res => {
      this.lugares = res;
    });
  }



}
