import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private infoHost = "http://localhost:4000/user";

  constructor(private http: HttpClient) { }

  public getFollowers(userId:string) {
    return this.http.get<Array<any>>(this.infoHost + "/" + userId + "/followers");
  }

  public getFollowing(userId:string) {
    return this.http.get(this.infoHost + "/" + userId + "/following");
  }

  public followUser(userId:string) {
    return this.http.post(this.infoHost + "/" + userId + "/follow",{});
  }

  public unfollowUser(userId:string) {
    return this.http.post(this.infoHost + "/" + userId + "/unfollow",{});
  }

}
