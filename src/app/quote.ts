export class Quote {
    showAuthor:boolean;
    constructor(public id:number,public name:string,public author:string,public submission:string,public upvote:number,public downVote:number,public actualDate:Date){
        this.showAuthor=false;
    }
}
