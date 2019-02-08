import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Lugar } from '../model/lugar';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  getAll(){
  this.db.collection('lugares').valueChanges().subscribe();
  }



  criarLugar(value:Lugar) {
    return this.db.collection<Lugar>('lugares').add({
      nome: value.nome,
      descricao: value.descricao,
    });
  }
}
