 import { Component, Directive, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import * as io from 'socket.io-client';
import { StreamService } from 'src/app/services/stream.service';
import { FormControl } from '@angular/forms';
import { NgAmpComponent } from 'ng-amp';


@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent implements OnInit , OnDestroy  {

  public messageContent = new FormControl('');
  width=200;
  userName: string;
  message: string = '';
  messageList: { message: string, userName: string | null, mine: boolean }[] = [];
  room: string = "";
  socket: any;
  src = "";
  streamId = "";
  stream: any = {};
  title = "";
  user_id="";
  is_live:boolean = false;
  loading = false;

  constructor(public auth: AuthService, private router: Router, private route: ActivatedRoute, private streamService: StreamService) {
    this.userName = auth.getUsername() || 'guest';
    //streamer name or id

  }
  async ngOnDestroy() {
    // stop 
    await this.socket.disconnect();
  }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.streamId = params['streamId'];
      console.log(this.streamId);
    });

    this.stream = await this.streamService.getStreamByID(this.streamId);
    this.title = this.stream[0].title;
    this.src = this.stream[0].endpoint;
    this.user_id = this.stream[0].user_id;
    this.is_live = this.stream[0].is_live;
    console.log(this.stream);

    this.room = this.streamId;

    //if (this.stream.is_live) 
    if (true) {
      this.socket = io.io(`localhost:4004?userName=${this.userName}&room=${this.room}`);
      this.joinRoom();
      this.socket.emit('set-user-name', this.userName, this.room);
      this.socket.on('output-messages', (data: any) => {
        //console.log(data);
        if (data.length) {
          data.forEach((message: any) => {
            if (this.room == message.room) {
              if (message.username == this.userName) {
                this.messageList.push({ message: message.msg, userName: message.username, mine: true });
              }
              else {
                this.messageList.push({ message: message.msg, userName: message.username, mine: false });
              }
            }

          });
        }
      });

      this.socket.on('message-broadcast', (data: { message: string, userName: string }) => {
        if (data) {
          this.messageList.unshift({ message: data.message, userName: data.userName, mine: false });
        }
      });
    }
  }

  sendMessage(): void {
    this.socket.emit('message', this.messageContent.value, this.room);
    this.messageList.unshift({ message: this.messageContent.value, userName: this.auth.getUsername(), mine: true });
    this.messageContent.setValue('');
  }


  async joinRoom() {
    this.socket.emit('join-room', this.room);
  }

  async stopStream() {
    this.streamService.stopStream().toPromise();
    this.router.navigateByUrl("/livestreams");
  }

}
