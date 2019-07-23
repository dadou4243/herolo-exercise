import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PredictionsComponent } from './components/predictions/predictions.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchBarComponent, PredictionsComponent, FavoritesListComponent, FavoriteComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
