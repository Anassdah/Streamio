import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EventsService } from 'src/app/services/events.service';

import { RegisterFormComponent } from '../register-form/register-form.component';


export interface Event{
  event_id:string;
  poster_url:string;
  event_title:string;
  isregistred:string;
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
  user_id:string|null=this.auth.getUser_id();
  ngOnInit(): void {
    this.getEvents();
  }
  getEvents():void{
    this.EventService.getEvents(this.user_id).subscribe((events) => {
      this.events = events;
    });
  }
  registred:Boolean=false;
  regis:String="Register";
  openDialog(event_id :string) {
    const dialogRef = this.dialog.open(RegisterFormComponent,{
      height: '60%',
      width: '30%',
      data: {
        dataKey: event_id
      }
    });
    
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if(res.data){
        this.registred=true;
        this.regis="Registred";
      }
    })
  }
  
  

  

}
