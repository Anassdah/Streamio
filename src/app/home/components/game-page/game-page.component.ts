import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GamesRESTService } from 'src/app/services/games-rest.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public rating = new FormControl('');
  public desc = new FormControl('');

  public game:any;
  private id = "";

  constructor(public rest: GamesRESTService,
    private route:ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getGame(this.id);
  }

  private getGame(gameId: string) {
    this.rest.getGameById(gameId).subscribe(
      data => {console.log(data);
        this.game = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  public submitReview(){
    let body = {
      "rating": this.rating.value,
      "desc": this.desc.value
    }
    this.rest.postReview(this.id, body).subscribe(err => console.log(err));
    this.ngOnInit();
  }

}
