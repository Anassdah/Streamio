import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleServiceService } from 'src/app/services/article-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { Article } from '../cards/cards.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private ArticleService:ArticleServiceService,
    private route: ActivatedRoute,) { }

  id:string | undefined;
  articles:Article[]=[];
  ngOnInit(): void {
    this.id  = this.route.snapshot.paramMap.get("user_id")!;
    this.ArticleService.getUserArticles(this.id).subscribe((articles) => {
      this.articles = articles;
      console.log(this.articles);
    });
  }
  

}
