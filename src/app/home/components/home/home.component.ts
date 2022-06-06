import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public feed: any[] = [];

  constructor(private feedService: FeedService, public auth: AuthService) { }

  async ngOnInit() {
    let rawFeed = await this.feedService.getFeed();
    if(rawFeed){
      let reviews = rawFeed.reviews;
      let articles = rawFeed.articles;
      let element;
        while(articles && reviews && reviews.length != 0 && articles.length != 0) {
          if(reviews[0].timestamp < articles[0].timestamp) {
            element = articles.shift();
            element.type = "article";
            this.feed.push(element);
          }else{
            element = reviews.shift();
            element.type = "review";
            this.feed.push(element);
          }
        }
      this.feed.push(...articles.map((element) => {
        element.type = "article";
        return element;
      }));
      this.feed.push(...reviews.map((element) => {
        element.type = "review";
        return element;
      }));
      
      console.log(this.feed);
    }
  }

  ratingStar(value:number,rating:number) {
    if(value<=rating){
      return("star");
    }else if((value-rating)>0.2 && (value-rating)<1){
      return("star_half");
    }else{
      return("star_border");
    }
  }

  async getUsername(user_id:string){
    let username = await this.auth.getUsernameFromId(user_id).toPromise();
    return username?.username;
  }
}
