import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfoService } from './user-info.service';
import { ArticleServiceService } from './article-service.service';
import { GamesRESTService } from './games-rest.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private userDBHost = "http://localhost:4000";
  private gameDBHost = "http://localhost:4000/games";
  private articleDBHost = "http://localhost:4000/article";
  private eventDBHost = "http://localhost:4000/events";

  constructor(private http: HttpClient, private userInfo: UserInfoService, private articleService: ArticleServiceService, private gameReviewsService: GamesRESTService) { }

  getUserCount() {
    return this.http.get<string>(this.userDBHost + "/users/count");
  }

  async getAllUsers() {
    let users = await this.http.get<Array<user>>(this.userDBHost + "/users").toPromise();
    if(users){
      users = await Promise.all(users.map( async (user) => {
        let followers = await this.userInfo.getFollowers(user._id).toPromise();
        let articles = await this.articleService.getUserArticles(user._id).toPromise();
        let reviews = await this.gameReviewsService.getUserReviews(user._id).toPromise();
        if(followers){
          user.followers = followers.length;
        } 
        if(articles){
          user.articles = articles.length;
        }
        if(reviews){
          user.reviews = reviews.length;
        }
        return user;
      }));
    }  
    return users;
  }

  getGameCount() {
    return this.http.get<string>(this.gameDBHost + "/count/games");
  }

  getReviewCount() {
    return this.http.get<string>(this.gameDBHost + "/count/reviews");
  }

  getArticleCount() {
    return this.http.get<string>(this.articleDBHost + "/article/count/");
  }

  getEventCount() {
    return this.http.get<string>(this.eventDBHost + "/events/count/");
  }

}

interface user {
  _id: string,
  username: string,
  email: string,
  role: string,
  followers: Number,
  articles: Number,
  reviews: Number
}
