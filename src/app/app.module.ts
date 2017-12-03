import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import {BandsComponent} from './bands/bands.component';
import {ArtistsService} from './shared/artists-service/artists.service';
import {BandsService} from './shared/bands-service/bands.service';
import {ArtistComponent} from './artist/artist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
/*
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';
*/
@NgModule(<NgModule>{
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArtistsComponent,
    BandsComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    /*
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    */
    APP_ROUTES
  ],
  providers: [ArtistsService, BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
