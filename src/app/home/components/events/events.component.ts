import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EventsService } from 'src/app/services/events.service';

import { RegisterFormComponent } from '../register-form/register-form.component';


export interface Event{
  event_id:string;
  poster_url:string;
  event_title:string;
  isregistred:boolean;
  nbr_registers:string;
}
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  constructor(
    private EventService:EventsService,
    public auth: AuthService,
    public dialog: MatDialog
  ) { }

  events:Event[]=[];
  events_already_Registred:Set<Event>=new Set();

  user_id:string|null=this.auth.getUser_id();
  ngOnInit(): void {
    this.getEvents();
  }
  getEvents():void{
    this.EventService.getEvents(this.user_id).subscribe((events) => {
      this.events = events;
      events.forEach((event :any)=>{
        if(event.isregistred) this.events_already_Registred.add(event);
      })
    });
  }
  registred:Boolean=false;
  regis:String="Register";
  openDialog(event:Event) {
    const dialogRef = this.dialog.open(RegisterFormComponent,{
      height: '60%',
      width: '30%',
      data: {
        dataKey: event.event_id
      }
    });
    
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if(res.data){
        event.isregistred=true;
        this.regis="Registred";
        this.events_already_Registred.add(event);
      }
    })
  }

  tags:string[]=['all tags','PUBG','Among Us','fotnite','valorant','Counter-Strike','fifa','pes','Minecraft','Grand Theft Auto V','EA Tetris','Wii Sports','Super Mario Bros','The Witcher 3','Red Dead Redemption','Call of Duty','Roblox','Dota']
  keywords = new Set(this.tags);
  formControl = new FormControl(['all tags']);
  addKeyword(keyword: string) {
    let ind = this.formControl.value.indexOf(keyword);
    if (ind == -1) {
      this.formControl.value.push(keyword);
      this.formControl = new FormControl(this.formControl.value);
    } else {
      this.formControl.value.splice(ind, 1);
      this.formControl = new FormControl(this.formControl.value);
    }
    if(this.formControl.value.length <=1){
      this.getEvents();
    }
    else this.getEvents_withTags();
  }

  getEvents_withTags(){
    this.EventService
      .getEvents_withTags(this.formControl.value.slice(1))
      .subscribe((events: any) => {
        this.events =events;
        this.events.map((event:any)=>{
          var isRegistred=false;
          this.events_already_Registred.forEach(e=>{
            if(e.event_id==event.event_id){
              isRegistred=true;
            }
          })
          event.isregistred=isRegistred;
          return event;
        })
      })
    }
    cancel_Registration(event_id:any){
      this.EventService
      .cancel_Registration(event_id)
      .subscribe((res: any) => {

      })
    }
}