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
import {MatFormFieldModule} from '@angular/material/form-field';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import { CarouselModule } from './components/carousel/carousel.module';
import { ArticleComponent } from './components/article/article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';

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
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import { CarouselModule } from './components/carousel/carousel.module';
import { GamePageComponent } from './components/game-page/game-page.component';
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b




@NgModule({
  declarations: [
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
<<<<<<< HEAD
    ArticleComponent,
    AddArticleComponent,
    ImagesComponent,
    
=======
    GamePageComponent
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CarouselModule,
    //Material modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatCardModule,
<<<<<<< HEAD
    MarkdownModule.forRoot(),
    HttpClientModule,
    ToastrModule ,
    FileUploadModule,
=======
    ReactiveFormsModule
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b
  ]
})
export class HomeModule { }
