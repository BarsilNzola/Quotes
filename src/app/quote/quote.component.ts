import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Named must be your fear before banish it you can.',author:'Master Yoda',submission:'John Nzola'},
    {id:2,name:'We shall destroy the ones called the turtles who call themselves the turtles.',author:'Krang',submission:'John Nzola'},
  ];

  constructor(){}

  ngOnInit(){
  }

}
