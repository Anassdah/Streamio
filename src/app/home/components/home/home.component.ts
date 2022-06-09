import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { AuthService } from 'src/app/services/auth.service';
import { FeedService } from 'src/app/services/feed.service';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public feed: any[] = [];
  public liveStreams: any = [];

  constructor(private feedService: FeedService, public auth: AuthService,private router: Router, private streamService: StreamService
    ) { }
  gotoArticle(article: Article) {
    this.router.navigate(
      ['/article/',article._id]
    );
  } 

  async ngOnInit() {
    /*this.liveStreams = await this.streamService.getLiveStreams();
    console.log(this.liveStreams);
    this.liveStreams = await Promise.all(this.liveStreams.map(async (stream: any) => {
      let usernameObject = await this.auth.getUsernameFromId(stream.user_id).toPromise() || {username: undefined};
      stream.username = usernameObject.username;
      return stream;
    }));
    this.liveStreams = this.liveStreams.reverse();*/

    
    let rawFeed = await this.feedService.getFeed();
    console.log(rawFeed);
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

  goToStream(id: string) {
    this.router.navigateByUrl('/watch?streamId=' + id);
  }
}
