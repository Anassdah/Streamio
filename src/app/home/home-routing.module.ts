import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
<<<<<<< HEAD
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { EventsComponent } from './components/events/events.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { ImagesComponent } from './components/images/images.component';
=======
import { ArticlesComponent } from './components/articles/articles.component';
import { EventsComponent } from './components/events/events.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b
import { LivestreamsComponent } from './components/livestreams/livestreams.component';
import { StreamersComponent } from './components/streamers/streamers.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
    {
        path:'',
        component:WrapperComponent,
        children:[
            {
<<<<<<< HEAD
                path:'images',
                component :ImagesComponent

            },
            {
                path:'add_article',
                component :AddArticleComponent
            },
            {
                path:'article/:id',
                component :ArticleComponent
            },
            {
=======
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b
                path:'home',
                component:HomeComponent
            },
            {
                path:'articles',
                component:ArticlesComponent
            },
            {
<<<<<<< HEAD
=======
                path:'games/:id',
                component:GamePageComponent
            },
            {
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b
                path:'games',
                component:GamesComponent
            },
            {
                path:'events',
                component:EventsComponent
            },
            {
                path:'livestreams',
                component:LivestreamsComponent
            },
            {
                path:'streamers',
                component:StreamersComponent
            },
            {
                path:'aboutus',
                component:AboutusComponent
            },
            {
                path:'**',
                redirectTo:'/home',
                pathMatch:'full'
              }
        ]
    }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],

})
export class HomeRoutingModule { }