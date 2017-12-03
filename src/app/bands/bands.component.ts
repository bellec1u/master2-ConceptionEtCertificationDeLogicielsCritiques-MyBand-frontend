import { Component, OnInit } from '@angular/core';
import {BandsService} from '../shared/bands-service/bands.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  // private property to store people value
  private _bands: any[];

  constructor(private _bandsService: BandsService) {
    this._bands = [];
  }

  /**
   * Returns private property _bands
   *
   * @returns {any[]}
   */
  get bands(): any[] {
    return this._bands;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._bandsService
      .fetch()
      .subscribe((bands: any[]) => this._bands = bands);
  }

}
