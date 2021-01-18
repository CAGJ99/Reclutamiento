import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetCharactersComponent } from './components/Characters/get-characters/get-characters.component';
import { GetComicsComponent } from './components/Comics/get-comics/get-comics.component';
import { SearchCharactersComponent } from './components/Characters/search-characters/search-characters.component';
import { SearchComicsComponent } from './components/Comics/search-comics/search-comics.component';
import { GetCreatorsComponent } from './components/Creators/get-creators/get-creators.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'marvel/characters', component: GetCharactersComponent},
  {path:'marvel/comics',component:GetComicsComponent},
  {path:'marvel/search/character/:id', component:SearchCharactersComponent},
  {path:'marvel/search/comic/:id', component:SearchComicsComponent},
  {path:'marvel/creators',component: GetCreatorsComponent}
];



export const APP_ROUTING = RouterModule.forRoot(routes, { useHash: true });  