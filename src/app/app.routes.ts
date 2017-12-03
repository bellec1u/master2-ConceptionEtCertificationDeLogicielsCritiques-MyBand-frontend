import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { BandsComponent } from './bands/bands.component';
import { BandComponent } from './band/band.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'artist/:id', component: ArtistsComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'band/:id', component: BandComponent },
  { path: 'bands', component: BandsComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
