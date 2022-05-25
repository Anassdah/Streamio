import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

export interface Article{
    _id:string;
    title :string;
    image_url : string;
    description :string ;
    content:string;
    author_id : string ;
    author_name:string;
    likes : string ;
    comments :[];
}
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  
  @Input() cards: Article []| undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoArticle(article: Article) {
    this.router.navigate(
      ['/article/',article._id]
    );
  } 
}
