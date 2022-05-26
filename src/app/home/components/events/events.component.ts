import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EventsService } from 'src/app/services/events.service';


export interface Event{
  poster_url:string;
  event_title:string;
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
  ) { }

  events:Event[]=[];
  ngOnInit(): void {
    this.getEvents();
  }
  getEvents():void{
    this.EventService.getEvents().subscribe((events) => {
      this.events = events;
      console.log(events);
    });
  }
  
  

  

}
