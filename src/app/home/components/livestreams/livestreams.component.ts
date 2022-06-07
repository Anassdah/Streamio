import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-livestreams',
  templateUrl: './livestreams.component.html',
  styleUrls: ['./livestreams.component.scss']
})
export class LivestreamsComponent implements OnInit {

  streams: any;

  constructor(private streamService: StreamService, private router: Router) { }

  async ngOnInit() {
    this.streams = await this.streamService.getStreams();
  }

  goToStream(endpoint: string) {
    this.router.navigateByUrl('/watch?endpoint=' + endpoint);
  }

}
