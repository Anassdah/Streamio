import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Article } from '../cards/cards.component';
import { ArticleServiceService } from 'src/app/services/article-service.service';

export interface Comment{
    author_id :string ;
    comment:string;
    author_name:string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private ArticleService:ArticleServiceService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.getArticle();
  }
  article:Article | undefined;
  id:string | undefined;
  comments:Comment[]=[];

  getArticle():void{
    this.id  = this.route.snapshot.paramMap.get("id")!;
    this.ArticleService.getArticle(this.id).subscribe((article) => {
      this.article = article;
      this.comments=article.comments.reverse();
    });
  }

  
  comment:string ="";
  newComment:Comment={
    author_id :"1" ,
    comment:"string",
    author_name:"user name",
  };

  addComment(){
    if(this.comment){
      this.newComment.comment=this.comment;
      this.ArticleService.addComment(this.id,this.newComment).subscribe(() => {
          this.comments.unshift(this.newComment);
          this.comment="";
      })
    }
    
  }


}

