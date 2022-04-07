import { Component, OnInit, Input } from '@angular/core';

import { Message } from '../Message';

@Component({
  selector: 'app-gauche',
  templateUrl: './gauche.component.html',
  styleUrls: ['./gauche.component.css']
})
export class GaucheComponent implements OnInit {

  @Input()
  listeMessages: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
