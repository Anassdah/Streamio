import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleComponent } from './components/article/article.component';
import { ImagesComponent } from './components/images/images.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { EventsComponent } from './components/events/events.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { LivestreamsComponent } from './components/livestreams/livestreams.component';
import { LoginComponent } from './components/login/login.component';
import { StreamersComponent } from './components/streamers/streamers.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {   
        path:'',
        component:WrapperComponent,
        children:[
            {
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
                path:'home',
                component:HomeComponent
            },
            {
                path:'articles',
                component:ArticlesComponent
            },
            {
                path:'games/:id',
                component:GamePageComponent
            },
            {
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