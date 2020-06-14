import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Named must be your fear before banish it you can.','Master Yoda','John Nzola'),
    new Quote(2,'We shall destroy the ones called the turtles who call themselves the turtles.','Krang','John Nzola'),
  ];

  constructor(){}

  ngOnInit(){
  }

}
