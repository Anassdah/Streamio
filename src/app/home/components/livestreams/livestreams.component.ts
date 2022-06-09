import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-livestreams',
  templateUrl: './livestreams.component.html',
  styleUrls: ['./livestreams.component.scss']
})
export class LivestreamsComponent implements OnInit {

  streams: any;

  constructor(private streamService: StreamService, private router: Router, private auth: AuthService) { }

  async ngOnInit() {
    this.streams = await this.streamService.getStreams();
    this.streams = await Promise.all(this.streams.map(async (stream: any) => {
      stream.usename = await this.auth.getUsernameFromId(stream.user_id);
      return stream;
    }));
    this.streams.reverse();
  }

  goToStream(id: string) {
    this.router.navigateByUrl('/watch?streamId=' + id);
  }

}
