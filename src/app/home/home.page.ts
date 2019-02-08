import { FirebaseService } from './../service/firebase.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  template: `
  <ul>
    <li *ngFor="let lugar of lugares | async">
      {{ lugar.nome }}
    </li>
  </ul>
  `
})
export class HomePage implements OnInit {
  lugares: Observable<any[]>;

  constructor( private menu: MenuController,private db: AngularFirestore) {
    this.lugares = db.collection('lugares').valueChanges();
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  ngOnInit(): void {
  
  }



}
