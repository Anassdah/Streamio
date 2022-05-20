import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesRESTService } from 'src/app/services/games-rest.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public games: any;

  constructor(private rest: GamesRESTService,
    private router: Router) { }

  ngOnInit(): void {
    this.getGames();
  }

  private getGames() {
    this.rest.getGames().subscribe(
      data => {
        this.games = data;
      },
      err => {
        this.games = [
          {
            "name":"An error occured",
          }
        ];
        console.log(err);
      }
    )
  }

  public goToGame(gameId:string) {
    this.router.navigateByUrl('/games/'+gameId);
  }

}
