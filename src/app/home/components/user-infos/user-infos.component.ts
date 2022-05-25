import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss']
})
export class UserInfosComponent implements OnInit {
  @Input() user_id: string| undefined;

  constructor() { }
  user_name:string ="user Name";

  ngOnInit(): void {
  }

}
