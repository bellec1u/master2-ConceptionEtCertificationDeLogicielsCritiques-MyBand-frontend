import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ArtistsService } from '../shared/artists-service/artists.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import {InstrumentService} from '../shared/instrument-service/instrument.service';
import {BandService} from '../shared/band-service/band.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  // private property to store artist value
  private _artist: any;
  // private property to store favorite instrument value
  private _favoriteInstrument: any;
  // private property to store instruments value
  private _instruments: any[];
  // private property to store band value
  private _band: any;

  /**
   * Component constructor
   */
  constructor(private _artistsService: ArtistsService, private _instrumentService: InstrumentService, private _bandService: BandService,
              private _router: ActivatedRoute) {
    this._artist = {};
    this._instruments = [];
    this._favoriteInstrument = {};
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
   * Returns private property _favoriteInstrument
   *
   * @returns {any}
   */
  get favoriteInstrument(): any {
    return this._favoriteInstrument;
  }

  /**
   * Returns private property _instruments
   *
   * @returns {any}
   */
  get instruments(): any {
    return this._instruments;
  }

  /**
   * Returns private property _band
   *
   * @returns {any}
   */
  get band(): any {
    return this._band;
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
      .subscribe((artist: any) => {
        this._artist = artist;
        this.extractInstruments(artist.favoriteInstrument, artist.instruments);
        this.extractBand(artist.band);
      });
  }

  private extractInstruments(idFavoriteInstrument: any, idInstruments: any[]) {
    this._instrumentService
      .fetchOne(idFavoriteInstrument)
      .subscribe((instrument: any[]) => this._favoriteInstrument = instrument);

    for (const id of idInstruments) {
      this._instrumentService
        .fetchOne(id)
        .subscribe((instrument: any[]) => this._instruments.push(instrument));
    }
  }

  private extractBand(idBand: any) {
    this._bandService
      .fetchOne(idBand)
      .subscribe((band: any[]) => this._band = band);
  }

}
