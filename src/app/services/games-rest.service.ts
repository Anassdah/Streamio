import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesRESTService {

  private host = "http://34.117.1.114";

  constructor(private http: HttpClient) { }

  public getGames() {
    return this.http.get(this.host+"/games");
  }

  public getGameById(gameId: string) {
    return this.http.get(this.host+"/games/"+gameId);
  }

  public getReviews(gameId: string) {
    return this.http.get(this.host+"/games/"+gameId+"/reviews");
  }

  public getUserReviews(user_id: string) {
    return this.http.get<any>(this.host + "/games/user/" + user_id + "/reviews");
  }

  public postReview(gameId: string, body: any) {
    return this.http.post(this.host + "/games/" + gameId + "/reviews", body);
  }
}
