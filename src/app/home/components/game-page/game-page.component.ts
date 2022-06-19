import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GamesRESTService } from 'src/app/services/games-rest.service';

interface Rating {
  value: number;
  max: number;
  color?: ThemePalette;
  disabled?: boolean;
  dense?: boolean;
  readonly?: boolean;
};

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  ratings: Rating =
    {
      value: 1,
      max: 5,
      color: "primary"
    };

  public rating = new FormControl(1);
  public desc = new FormControl('');

  public game:any;
  private id = "";

  constructor(public rest: GamesRESTService,
    private route:ActivatedRoute,
    private router: Router,
    public auth: AuthService) {}

    gameReviews:any[]=[];

  
  loading=true;
  ngOnInit(): void {
    this.rating.setValue(1);
    this.desc.setValue("");

    this.id = this.route.snapshot.params['id'];
    this.getGame(this.id);
    
  }

  private getGame(gameId: string) {
    this.rest.getGameById(gameId).subscribe(
      data => {
        this.game = data;
        this.gameReviews=this.game.reviews;
        this.loading=false;
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
    this.rest.postReview(this.id, body).subscribe(()=>{
      this.gameReviews.unshift(body);

    });
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

}
