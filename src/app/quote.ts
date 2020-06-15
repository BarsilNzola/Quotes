export class Quote {
    showDetails:boolean;
    constructor(public id:number,public quote:string,public author:string,public submission:string,public upvote:number,public downVote:number,public actualDate:Date){
        this.showDetails=false
    }
}
