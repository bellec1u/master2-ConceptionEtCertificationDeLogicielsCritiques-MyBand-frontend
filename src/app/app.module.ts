import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { BandsComponent } from './bands/bands.component';
import { ArtistComponent } from './artist/artist.component';
import { BandComponent } from './band/band.component';

import { ArtistsService } from './shared/artists-service/artists.service';
import { BandService } from './shared/band-service/band.service';
import { SignupComponent } from './signup/signup.component';
import { BandcreateComponent } from './createband/bandcreate.component';
import { ConnectedHomeComponent } from './connected-home/connected-home.component';
import { ResearchesComponent } from './researches/researches.component';
import {ResearchService} from './shared/research-service/research.service';
import { ResearchComponent } from './research/research.component';
import {InstrumentService} from './shared/instrument-service/instrument.service';
import { BandCreatorComponent } from './band-creator/band-creator.component';
import { ResearchCreatorComponent } from './research-creator/research-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent,
    HomeComponent,
    ArtistComponent, ArtistsComponent,
    BandComponent, BandsComponent, BandcreateComponent,
    SignupComponent, ConnectedHomeComponent, ResearchesComponent,
    ResearchComponent,
    BandCreatorComponent,
    ResearchCreatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    APP_ROUTES
  ],
  providers: [
    ArtistsService,
    BandService,
    ResearchService,
    InstrumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
