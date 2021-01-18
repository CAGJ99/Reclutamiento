import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GetCharactersComponent } from './components/Characters/get-characters/get-characters.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { GetComicsComponent } from './components/Comics/get-comics/get-comics.component';
import { SearchCharactersComponent } from './components/Characters/search-characters/search-characters.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComicsComponent } from './components/Comics/search-comics/search-comics.component';
import { CharacterComponent } from './components/Characters/character/character.component';
import { ComicComponent } from './components/Comics/comic/comic.component';
import { GetCreatorsComponent } from './components/Creators/get-creators/get-creators.component';
import { CreatorsComponent } from './components/Creators/creators/creators.component'

@NgModule({
  declarations: [
    AppComponent,
    GetCharactersComponent,
    MainNavComponent,
    GetComicsComponent,
    SearchCharactersComponent,
    HomeComponent,
    SearchComicsComponent,
    CharacterComponent,
    ComicComponent,
    GetCreatorsComponent,
    CreatorsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
