import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ArticleServiceService } from 'src/app/services/article-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { StreamService } from 'src/app/services/stream.service';
import { Article } from '../cards/cards.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private ArticleService: ArticleServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private streamService: StreamService,
  ) {}

  id: string | undefined;
  articles: Article[] = [];
  streams:any=[];
  mystreams:any=[];

  async ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('user_id')!;
    this.ArticleService.getUserArticles(this.id).subscribe((articles) => {
      this.articles = articles;
    });
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.id = this.route.snapshot.paramMap.get('user_id')!;
        this.ArticleService.getUserArticles(this.id).subscribe((articles) => {
          this.articles = articles;
        });
      }
    });
    this.streams = await this.streamService.getStreams();
    this.streams.forEach((stream:any)=>{
      if(stream.user_id==this.auth.getUser_id()){
        this.mystreams.push(stream);
      }
    })
  }

  goToStream(id: string) {
    this.router.navigateByUrl('/watch?streamId=' + id);
  }
}
