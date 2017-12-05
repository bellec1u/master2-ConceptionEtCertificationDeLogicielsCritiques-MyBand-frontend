import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { BandsComponent } from './bands/bands.component';
import { BandComponent } from './band/band.component';
import {ArtistComponent} from './artist/artist.component';
import {SignupComponent} from './signup/signup.component';
import {BandcreateComponent} from './createband/bandcreate.component';
import {ConnectedHomeComponent} from './connected-home/connected-home.component';
import {ResearchComponent} from './research/research.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'bands', component: BandsComponent },
  { path: 'band/:id', component: BandComponent },
  { path: 'createband', component: BandcreateComponent },
  { path: 'logedin', component: ConnectedHomeComponent },
  { path: 'research/:id', component: ResearchComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
