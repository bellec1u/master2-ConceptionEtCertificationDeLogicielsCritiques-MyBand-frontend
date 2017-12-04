import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ArtistsService } from '../shared/artists-service/artists.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  // private property to store artist value
  private _artist: any;
  // private property to store flag to know if it's a person
  private _isPerson: boolean;

  /**
   * Component constructor
   */
  constructor(private _artistsService: ArtistsService, private _router: ActivatedRoute) {
    this._artist = {};
    this._isPerson = false;
  }

  /**
   * Returns private property _artist
   *
   * @returns {any}
   */
  get artist(): any {
    return this._artist;
  }

  /**
   * Returns flag to know if we are on a profile or on HP
   *
   * @returns {boolean}
   */
  get isPerson(): boolean {
    return this._isPerson;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    Observable
      .merge(
        this._router.params
          .filter(params => !!params['id'])
          .flatMap(params => this._artistsService.fetchOne(params['id']))
      )
      .subscribe((artist: any) => this._artist = artist);
  }

}
