import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GamesRESTService } from 'src/app/services/games-rest.service';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-start-stream',
  templateUrl: './start-stream.component.html',
  styleUrls: ['./start-stream.component.scss']
})
export class StartStreamComponent implements OnInit {

  title = new FormControl('');
  game: any = {};
  loading = false;
  endpoints = {ingestUrl: "", endpoint: "", stream: {_id:""}};
  link = "";
  submitted = false;

  games: any = [];

  constructor(private streamService: StreamService, private auth: AuthService, private router: Router, private gameService: GamesRESTService) { }

  async ngOnInit() {
    this.games = await this.gameService.getGames().toPromise();
  }

  async startStream() {
    if (this.title.value != '' && this.game != {}) {
      this.submitted = true;
      this.loading = true;
      this.endpoints = await this.streamService.startStream(this.title.value, this.game._id) || { ingestUrl: "", endpoint: "", stream: {} };
      this.loading = false;
      this.link = "/watch?streamId=" + this.endpoints.stream._id;
    }
  }
  goToStream(id: string) {
    this.router.navigateByUrl('/watch?streamId=' + id);
  }

}