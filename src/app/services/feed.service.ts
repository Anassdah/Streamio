import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private feedHost = "http://localhost:4000/feed";

  constructor(private http: HttpClient, private auth: AuthService, private userInfoService: UserInfoService) { }


  async getFeed() {
    let feed: RawFeed | undefined;
    let user_id = await this.auth.getUser_id();
    if(user_id) {
      let following = await this.userInfoService.getFollowing(user_id).toPromise();
      console.log(following);
      feed = await this.http.post<RawFeed>(this.feedHost, {"following": following}).toPromise();
    }else{
      feed = await this.http.post<RawFeed>(this.feedHost, {"get_all": true }).toPromise();
    }
    return feed;
  }

}

interface RawFeed {
  articles: Array<any>,
  reviews: Array<any>,
}
