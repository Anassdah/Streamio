import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  userName:string;
  message:string = '';
  messageList: {message: string, userName: string, mine: boolean}[] = [];
  room: string;
  socket: any;
  src = "";

  constructor(public auth: AuthService,private route: ActivatedRoute,) {
    this.userName=auth.getUsername()||'guest';
    //streamer name or id
    this.room="";
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.src = params['endpoint'];
      console.log(this.src);
    });


    this.socket = io.io(`localhost:4004?userName=${this.userName}&room=${this.room}`);
    this.joinRoom();
    this.socket.emit('set-user-name', this.userName,this.room);
    this.socket.on('output-messages',(data: any)=>{
      //console.log(data);
      if (data.length){
        data.forEach((message: any) => {
          if(this.room==message.room){
            if(message.username==this.userName){
              this.messageList.push({message: message.msg, userName: message.username, mine: true});
            }
            else{
              this.messageList.push({message: message.msg, userName: message.username, mine: false});
            }
          }
          
        });
      }
    });

    this.socket.on('message-broadcast', (data: {message: string, userName: string}) => {
      if (data) {
        this.messageList.push({message: data.message, userName: data.userName, mine: false});
      }
    });


  }
  sendMessage(): void {
    this.socket.emit('message',this.message,this.room);
    this.messageList.push({message: this.message, userName: this.userName, mine: true});
    this.message = '';
  }

  async joinRoom(){
    this.socket.emit('join-room',this.room);
  }

}
