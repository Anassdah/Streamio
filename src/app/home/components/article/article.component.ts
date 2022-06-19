import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Article } from '../cards/cards.component';
import { ArticleServiceService } from 'src/app/services/article-service.service';
import { AuthService } from 'src/app/services/auth.service';

export interface Comment{
    author_id :string ;
    comment:string;
    author_name:string | null;
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
    public auth: AuthService,
  ) {}
  ngOnInit() {
    this.getArticle();
  }
  article:Article | undefined;
  id:string | undefined;
  comments:Comment[]=[];

  loading=true;

  getArticle():void{
    this.id  = this.route.snapshot.paramMap.get("id")!;
    this.ArticleService.getArticle(this.id).subscribe((article) => {
      this.article = article;
      this.comments=article.comments.reverse();
      this.loading=false;
    });
  }

  
  comment:string ="";
 

  addComment(){
    if(this.comment){
      const  newComment:Comment={
        author_id :"1" ,
        comment:"string",
        author_name:this.auth.getUsername(),
      };
      newComment.comment=this.comment;
      this.ArticleService.addComment(this.id,newComment).subscribe(() => {
          this.comments.unshift(newComment);
          this.comment="";
      })
    }
    
  }


}


