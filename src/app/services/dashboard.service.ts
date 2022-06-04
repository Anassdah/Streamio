import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private userDBHost = "http://localhost:4000";
  private gameDBHost = "http://localhost:4000/games";
  private articleDBHost = "http://localhost:4000/article";
  private eventDBHost = "http://localhost:4000/events";

  constructor(private http: HttpClient) {}

  getUserCount() {
    return this.http.get<string>(this.userDBHost + "/users");
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
