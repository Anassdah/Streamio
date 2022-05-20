import { Component, OnInit } from '@angular/core';
import { cards } from '../cards/cards.component';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

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
}

