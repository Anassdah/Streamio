import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  constructor( private EventService:EventsService,
    private router: Router) { }

  ngOnInit(): void {
  }
  Event_title:string | undefined;
  poster_url:string | undefined;
  addEvent(){
    if(this.poster_url && this.Event_title){
      const event={
        event_title : this.Event_title,
        poster_url : this.poster_url,
      };
      this.EventService.addEvent(event).subscribe(() => {
        this.router.navigate(
          ['/events/']
        );
      });
    }
  }

}
