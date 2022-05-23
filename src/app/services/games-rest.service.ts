import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesRESTService {

  private host = "http://localhost:4000/games";

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

  public postReview(gameId: string, body: any) {
    return this.http.post(this.host + "/games/" + gameId + "/reviews", body,{headers:{"userId":"randomUserId"}});
  }
}
