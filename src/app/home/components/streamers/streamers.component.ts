import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.scss']
})
export class StreamersComponent implements OnInit {

  sub:string='subscribe';

  constructor() { }

  ngOnInit(): void {
  }
  subscribe(){
    if(this.sub=='subscribe'){
      this.sub='unsubscribe'
    }
    else{
      this.sub="subscribe"
    }
  }

}
