import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ArticleServiceService } from 'src/app/services/article-service.service';
import { Article } from '../cards/cards.component';
=======
import { cards } from '../cards/cards.component';
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor() { }

  ngOnInit(): void {
  }
  cards: cards [] = [
    {
      image: "assets/images/u2.webp",
      btn: "btn-danger",
      author:"Mark Antony"
    },
    {
      image: "assets/images/u3.webp",
      btn: "btn-warning",
      author:"John Doe"
    },
    {
      image: "assets/images/uncharted.jpg",
      btn: "btn-danger",
      author:"Mark Antony"
    },
    {
      image: "assets/images/cod2.jpg",
      btn: "btn-warning",
      author:"John Doe"
    },
    {
      image: "assets/images/u4.webp",
      btn: "btn-info",
      author:"Blake Levy"
    },]
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b
}

