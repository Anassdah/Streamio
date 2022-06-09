import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-start-stream',
  templateUrl: './start-stream.component.html',
  styleUrls: ['./start-stream.component.scss']
})
export class StartStreamComponent implements OnInit {

  title = new FormControl('');
  loading = false;
  endpoints = {ingestUrl: "", endpoint: "", stream: {_id:""}};
  link = "";
  submitted = false;

  constructor(private streamService: StreamService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  async startStream() {
    if (this.title.value != '') {
      this.submitted = true;
      this.loading = true;
      this.endpoints = await this.streamService.startStream(this.title.value) || { ingestUrl: "", endpoint: "", stream: {} };
      this.loading = false;
      this.link = "/watch?streamId=" + this.endpoints.stream._id;
    }
  }

}