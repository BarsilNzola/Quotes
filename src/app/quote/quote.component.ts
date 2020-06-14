import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Named must be your fear before banish it you can.','Master Yoda','John Nzola',0,0),
    new Quote(2,'We shall destroy the ones called the turtles who call themselves the turtles.','Krang','John Nzola',0,0),
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  upVote(upvote,index){
    if(upvote){
      this.quotes[index].upvote +=1;
    }
  }

  downVote(downvote,index){
    if(downvote){
      this.quotes[index].downVote +=1;
    }
  }

  deleteQuote(quoteDelete, index){
    if(quoteDelete){
      let deletion = confirm('Delete Quote??')
      if(deletion){
        this.quotes.splice(index,1);
      }
    }
  }

  constructor(){}

  ngOnInit(){
  }

}
