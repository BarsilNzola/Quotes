import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Named must be your fear before banish it you can.','Master Yoda','John Nzola',0,0,new Date(2020,6,15)),
    new Quote(2,'We shall destroy the ones called the turtles who call themselves the turtles.','Krang','John Nzola',0,0,new Date(2020,6,15)),
  ];
  preNum:number
  postNum:number
  count:number

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

  highestUpvote(){
    this.preNum=0
    this.postNum=0

    for(this.count=0 ; this.count < this.quotes.length; this.count++) {
      this.postNum = this.quotes[this.count].upvote;
      if(this.postNum > this.preNum){this.preNum = this.postNum}
    }
    return  this.preNum
  }

  
  constructor(){}

  ngOnInit(){
  }

}
