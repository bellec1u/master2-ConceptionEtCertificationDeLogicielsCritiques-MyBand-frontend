import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ArtistsService} from '../shared/artists-service/artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
// private property to store people value
  private _artists: any[];

  constructor(private _router: Router, private _artistService: ArtistsService) {
    this._artists = [];
  }

  /**
   * Returns private property _artists
   *
   * @returns {any[]}
   */
  get artists(): any[] {
    return this._artists;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._artistService
      .fetch()
      .subscribe((artists: any[]) => this._artists = artists);
  }

  /**
   * Function to navigate to current artist
   *
   * @param band
   */
  navigate(artist) {
    this._router.navigate(['/artist', artist.id]);
  }

}
