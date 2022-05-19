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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import { CarouselModule } from './components/carousel/carousel.module';
import { GamePageComponent } from './components/game-page/game-page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';




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
    GamePageComponent
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
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class HomeModule { }
