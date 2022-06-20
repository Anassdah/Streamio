import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { GamesComponent } from './components/games/games.component';
import { LivestreamsComponent } from './components/livestreams/livestreams.component';
import { StreamersComponent } from './components/streamers/streamers.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { EventsComponent } from './components/events/events.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TopbarComponent } from './components/topbar/topbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ArticleComponent } from './components/article/article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

import { HttpClientModule } from '@angular/common/http';
import { ImagesComponent } from './components/images/images.component';
import { FileSelectDirective } from 'ng2-file-upload';

import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import { GamePageComponent } from './components/game-page/game-page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import { UserInfosComponent } from './components/user-infos/user-infos.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { NgAmpModule } from 'ng-amp';
import { StartStreamComponent } from './start-stream/start-stream.component';
import { NgxMaterialRatingModule } from 'ngx-material-rating';
import {MatNativeDateModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { WatchComponent } from './watch/watch.component';
import {MatSelectModule} from '@angular/material/select';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

import {ClipboardModule} from '@angular/cdk/clipboard';


@NgModule({
  declarations: [
    WatchComponent ,
    WrapperComponent,
    HomeComponent,
    ArticlesComponent,
    GamesComponent,
    LivestreamsComponent,
    StreamersComponent,
    AboutusComponent,
    EventsComponent,
    TopbarComponent,
    CardsComponent,
    ArticleComponent,
    AddArticleComponent,
    ImagesComponent,
    GamePageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserInfosComponent,
    AddEventComponent,
    RegisterFormComponent,
    AdminDashboardComponent,
    StartStreamComponent,
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgAmpModule,
    //Material modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatCardModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    ToastrModule ,
    FileUploadModule,
    ReactiveFormsModule ,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatGridListModule,
    NgxMaterialRatingModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    ClipboardModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},TopbarComponent,
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ]
})
export class HomeModule { }
