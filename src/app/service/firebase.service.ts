import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lugar } from '../model/lugar';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private lugarCollection: AngularFirestoreCollection<Lugar>;

  private lugares: Observable<Lugar[]>;

  constructor(private db: AngularFirestore) {
    this.lugarCollection = db.collection<Lugar>('lugares');

    this.lugares = this.lugarCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getLugares() {
    return this.lugares;
  }
  getLugaresId(id){
    return this.lugarCollection.doc<Lugar>(id).valueChanges();
  }


  criarLugar(value: Lugar) {
    return this.db.collection<Lugar>('lugares').add({
      nome: value.nome,
      descricao: value.descricao,
    });
  }
}
