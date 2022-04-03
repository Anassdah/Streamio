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



@NgModule({
  declarations: [
    WrapperComponent,
    HomeComponent,
    ArticlesComponent,
    GamesComponent,
    LivestreamsComponent,
    StreamersComponent,
    AboutusComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    //Material modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule

  ]
})
export class HomeModule { }
