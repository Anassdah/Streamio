import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss']
})
export class UserInfosComponent implements OnInit {
  @Input() user_id: string | undefined;

  constructor(
    public auth: AuthService,
    private userInfo: UserInfoService
  ) { }
  user_name: string = "";
  followers: Number = NaN;

  ngOnInit(): void {
    this.getFollowersCount();
    this.getUsername();
  }

  private getFollowersCount() {
    if (this.user_id) {
      this.userInfo.getFollowers(this.user_id).subscribe(value => {
        this.followers = Number((<Array<Object>>value).length);
      }, err => {
        this.followers = NaN;
        console.log(err)
      })
    }
  }

  private getUsername() {
    if (this.user_id) {
      this.auth.getUsernameFromId(this.user_id).subscribe(value => {
        this.user_name = value.username;
      }, err => {
        console.log(err);
      })
    }
  }
}
