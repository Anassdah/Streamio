<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
export interface Article{
    _id:string;
    title :string;
    image_url : string;
    description :string ;
    content:string;
    author_id : string ;
    likes : string ;
    comments :[];
=======
import { Component, OnInit } from '@angular/core';
export interface cards {
  image: string;
  btn: string;
  author:string;
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
<<<<<<< HEAD
  
  @Input() cards: Article []| undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoArticle(article: Article) {
    
    this.router.navigate(
      ['/article/',article._id]
    );
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
      image: "assets/images/FIFA22.jpg",
      btn: "btn-info",
      author:"Blake Levy"
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
