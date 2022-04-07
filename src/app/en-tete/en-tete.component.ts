import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-en-tete',
  templateUrl: './en-tete.component.html',
  styleUrls: ['./en-tete.component.css']
})
export class EnTeteComponent implements OnInit
{
  // Définition des données reçues depuius le composant PARENT
  @Input()
  title_fourni_au_composant_enfant: string = 'titre non défini';

  constructor() { }

  ngOnInit(): void {
  }

}
