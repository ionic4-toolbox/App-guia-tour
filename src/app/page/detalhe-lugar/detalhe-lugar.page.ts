import { FirebaseService } from './../../service/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Lugar } from 'src/app/model/lugar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-lugar',
  templateUrl: './detalhe-lugar.page.html',
  styleUrls: ['./detalhe-lugar.page.scss'],
})
export class DetalheLugarPage implements OnInit {
  
  lugares: any;
  constructor(
    private firabaseService: FirebaseService, 
    private activateRouter: ActivatedRoute) { }

  ngOnInit() {  
    this.firabaseService
    .getLugaresId(this.activateRouter.snapshot.params['id'])
    .subscribe(res => {
      this.lugares = res ;
    });

  }
  

}
