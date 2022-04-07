import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Message } from '../Message';

@Component({
  selector: 'app-pied-de-page',
  templateUrl: './pied-de-page.component.html',
  styleUrls: ['./pied-de-page.component.css']
})
export class PiedDePageComponent implements OnInit {

  @Input()
  message: Message = new Message( '', '', new Date() );

  // CE qui va être envoyé au parent
  @Output() newMessageEvent = new EventEmitter<string>();


  // Méthode du compposant enfant
  envoiMessageDepuisEnfant() {
    // Cette méthode émet l'évenement newMessageEvent qui va etre envoyé au parent
    this.newMessageEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
