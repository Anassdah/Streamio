import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  isExpanded:boolean=false;
<<<<<<< HEAD
  linkstatue:string="home";
  samelink(link:string):boolean{
    if (link==this.linkstatue){return true}
    return false 

=======
  linkstatue:string=window.location.pathname.split("/")[1];
  samelink(link:string):boolean{
    if (link==this.linkstatue){return true}
    return false 
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b
  }
  constructor() { }

  ngOnInit(): void {
  }

}
