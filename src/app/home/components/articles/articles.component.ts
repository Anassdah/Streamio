import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from 'src/app/services/article-service.service';
import { Article } from '../cards/cards.component';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private ArticleService:ArticleServiceService) { }

  ngOnInit(): void {
    this.getArticles();
  }
  articles: Article []=[];
  getArticles(): void {
    this.ArticleService.getAllArticles().subscribe((articles) => {
      this.articles = articles.reverse();
    });
  }
}

