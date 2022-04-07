import { Component } from '@angular/core';

// Import de la déf. de Message
import { Message } from './Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP_Messagerie';

  // Message en cours de rédaction
  message: Message = new Message( '', '', new Date() );

  // Tableau de messages au début à vide
  T_Messages: Message[] = [];

  // Méthode appelée à l'ajout d'un message
  envoiMessage()
  {
    if ( this.message.auteur != "" && this.message.contenu != "" )
    {
      // On recréer une instance à partir du message en cours de rédaction
      this.T_Messages.push(
        new Message( this.message.auteur, this.message.contenu, new Date() )
      );

      // Réinitialisation du message en cours
      this.message.auteur = "";
      this.message.contenu = "" ;
    }
  }
}
