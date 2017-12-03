import { Component, OnInit } from '@angular/core';
import {BandsService} from '../shared/bands-service/bands.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  // private property to store band value
  private _band: any;

  constructor(private _bandService: BandsService, private _route: ActivatedRoute) {
    this._band = {};
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
        this._route.params
          .filter(params => !!params['id'])
          .flatMap(params => this._bandService.fetchOne(params['id']))
      )
      .subscribe((band: any) => this._band = band);
  }

}
