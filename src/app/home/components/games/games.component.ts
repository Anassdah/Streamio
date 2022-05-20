import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { GamesRESTService } from 'src/app/services/games-rest.service';
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
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
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b
  }

}
