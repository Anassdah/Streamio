import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  isExpanded:boolean=false;
  linkstatue:string="home";
  samelink(link:string):boolean{
    if (link==this.linkstatue){return true}
    return false 

  }
  constructor() { }

  ngOnInit(): void {
  }

}
