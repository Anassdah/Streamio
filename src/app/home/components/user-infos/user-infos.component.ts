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
  followers: Array<followRelation> = [];
  isFollowed: boolean = false;

  ngOnInit(): void {
    this.getFollowers();
    this.getUsername();
  }

  private getFollowers() {
    if (this.user_id) {
      this.userInfo.getFollowers(this.user_id).subscribe(value => {
        this.followers = <Array<followRelation>>value;
        this.checkFollowers();
      }, err => {
        this.followers = [];
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

  public checkFollowers() {
    this.isFollowed = false;
    this.followers.forEach(follows => {
      console.log(follows.followed_by);
      console.log(this.auth.getUser_id());
      if (follows.followed_by == this.auth.getUser_id()) {
        this.isFollowed = true;
      }
    });
  }

  public toggleFollow() {
    if (this.user_id) {
      if(this.isFollowed){
        this.userInfo.unfollowUser(this.user_id).subscribe(value => this.getFollowers(), err => console.log(err));
      }else{
        this.userInfo.followUser(this.user_id).subscribe(value => this.getFollowers(), err => console.log(err));
      }
    }
  }

}

interface followRelation {
  user_id: string,
  followed_by: string
}
