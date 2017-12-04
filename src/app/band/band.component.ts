import { Component, OnInit } from '@angular/core';
import {BandService} from '../shared/band-service/band.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ArtistsService} from '../shared/artists-service/artists.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  // private property to store band value
  private _band: any;
  // private property to store member value
  private _members: any[];

  constructor(private _bandService: BandService,
  private _artistService: ArtistsService, private _router: ActivatedRoute, private _route: Router) {
    this._band = {};
    this._members = [];
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
   * Returns private property _members
   *
   * @returns {any}
   */
  get members(): any {
    return this._members;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    Observable
      .merge(
        this._router.params
          .filter(params => !!params['id'])
          .flatMap(params => this._bandService.fetchOne(params['id']))
      )
      .subscribe((band: any) => { this._band = band; this.extractMembers(band.members); });
  }

  /**
   * Extract id of all members of the band and search them
   *
   * @param {any[]} idMembers
   */
  extractMembers(idMembers: any[]) {
    for (const id of idMembers) {
      this._artistService
        .fetchOne(id)
        .subscribe((artist: any[]) => this._members.push(artist));
    }
  }

  navigate(artist) {
    this._route.navigate(['/artist', artist.id]);
  }

}
