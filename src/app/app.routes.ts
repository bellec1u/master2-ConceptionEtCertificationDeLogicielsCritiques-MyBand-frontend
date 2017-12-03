import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { BandsComponent } from './bands/bands.component';
import { BandComponent } from './band/band.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artist/:id', component: ArtistsComponent },
  { path: 'bands', component: BandsComponent },
  { path: 'band/:id', component: BandComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
