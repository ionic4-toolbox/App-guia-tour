import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { ChatService } from './../../service/chat.service';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  msg: string;
  resultados: Message[]
  
  constructor(
    private chatService:ChatService) {
  }
  
  ngOnInit(): void {
    this.initBoot();
  }

  initBoot() {
    this.resultados = []
    this.chatService.getResponse('oi')
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp })
        });
      })
  }

  sendMessage() {
    this.resultados.push({ remetente: 'eu', mensagem: this.msg, data: new Date() })
    this.chatService.getResponse(this.removerAcentos(this.msg))
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp })
        });
      })

      this.msg = '';
    }
    
    ngAfterViewChecked() {
      this.scrollToBottom();
    }
    scrollToBottom(): void {
      try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch (err) { }
    }
  
    private removerAcentos(s) {
      return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    }
    
}
