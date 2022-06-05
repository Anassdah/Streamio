import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  constructor(private EventService: EventsService, private router: Router) {}

  form: FormGroup = new FormGroup({
    Event_title: new FormControl(''),
    poster_url: new FormControl(''),
    date :new FormControl(''),
  });

  ngOnInit(): void {}
  addEvent() {
    var poster_url=this.form.value.poster_url;
    var Event_title=this.form.value.Event_title;

    if (poster_url && Event_title) {

      const event = {
        event_title: Event_title,
        poster_url: poster_url,
        date:this.form.value.date,
        tags:this.tags,
      };
      this.EventService.addEvent(event).subscribe(() => {
        this.router.navigate(['/events/']);
      });
    }
  }


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: String[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(categorie: any): void {
    const index = this.tags.indexOf(categorie);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
