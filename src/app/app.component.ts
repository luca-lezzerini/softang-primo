import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contatore: number = 0;
  risultato: number = 0;

  add1: number = 0;
  add2: number = 0;

  prodotto: string = "";
  prodotti: string[] = [];

  incrementa() {
    this.contatore++;
    console.log(this.contatore);
  }

  somma() {
    this.risultato = this.add1 + this.add2;
  }

  add() {
    this.prodotti.push(this.prodotto);
    this.prodotto = "";
    console.log(this.prodotti);
  }

  cancella(n: number){
    this.prodotti.splice(n,1);
  }
}
