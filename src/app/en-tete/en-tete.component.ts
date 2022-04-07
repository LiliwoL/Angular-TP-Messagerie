import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-en-tete',
  templateUrl: './en-tete.component.html',
  styleUrls: ['./en-tete.component.css']
})
export class EnTeteComponent implements OnInit
{
  @Input()
    title: string = 'titre non défini';

  constructor() { }

  ngOnInit(): void {
  }

}
